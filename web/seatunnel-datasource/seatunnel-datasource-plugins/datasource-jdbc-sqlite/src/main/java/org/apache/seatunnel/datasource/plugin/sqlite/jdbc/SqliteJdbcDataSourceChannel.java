/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.seatunnel.datasource.plugin.sqlite.jdbc;

import org.apache.seatunnel.api.configuration.util.OptionRule;
import org.apache.seatunnel.datasource.plugin.api.DataSourceChannel;
import org.apache.seatunnel.datasource.plugin.api.DataSourcePluginException;
import org.apache.seatunnel.datasource.plugin.api.model.TableField;

import org.apache.commons.lang3.StringUtils;

import lombok.NonNull;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class SqliteJdbcDataSourceChannel implements DataSourceChannel {

    @Override
    public OptionRule getDataSourceOptions(@NonNull String pluginName) {
        return SqliteDataSourceConfig.OPTION_RULE;
    }

    @Override
    public OptionRule getDatasourceMetadataFieldsByDataSourceName(@NonNull String pluginName) {
        return SqliteDataSourceConfig.METADATA_RULE;
    }

    @Override
    public List<String> getTables(
            @NonNull String pluginName,
            Map<String, String> requestParams,
            String database,
            Map<String, String> options) {
        List<String> tableNames = new ArrayList<>();
        String filterName = options.get("filterName");
        String size = options.get("size");
        boolean isSize = StringUtils.isNotEmpty(size);
        if (StringUtils.isNotEmpty(filterName) && !filterName.contains("%")) {
            filterName = "%" + filterName + "%";
        } else if (StringUtils.equals(filterName, "")) {
            filterName = null;
        }
        try (Connection connection = getConnection(requestParams);
                ResultSet resultSet =
                        connection
                                .getMetaData()
                                .getTables(database, null, filterName, new String[] {"TABLE"})) {
            while (resultSet.next()) {
                String tableName = resultSet.getString("TABLE_NAME");
                if (StringUtils.isNotBlank(tableName)) {
                    tableNames.add(tableName);
                    if (isSize && tableNames.size() >= Integer.parseInt(size)) {
                        break;
                    }
                }
            }
            return tableNames;
        } catch (ClassNotFoundException | SQLException e) {
            throw new DataSourcePluginException("get table names failed", e);
        }
    }

    @Override
    public List<String> getDatabases(
            @NonNull String pluginName, @NonNull Map<String, String> requestParams) {
        // Hardcoded list of example database names
        List<String> dbNames = Arrays.asList("default", "");
        return dbNames;
    }

    @Override
    public boolean checkDataSourceConnectivity(
            @NonNull String pluginName, @NonNull Map<String, String> requestParams) {
        try (Connection ignored = getConnection(requestParams)) {
            return true;
        } catch (Exception e) {
            throw new DataSourcePluginException("check jdbc connectivity failed", e);
        }
    }

    @Override
    public List<TableField> getTableFields(
            @NonNull String pluginName,
            @NonNull Map<String, String> requestParams,
            @NonNull String database,
            @NonNull String table) {
        List<TableField> tableFields = new ArrayList<>();
        try (Connection connection = getConnection(requestParams, database)) {
            DatabaseMetaData metaData = connection.getMetaData();
            String primaryKey = getPrimaryKey(metaData, database, table);
            try (ResultSet resultSet = metaData.getColumns(database, null, table, null)) {
                while (resultSet.next()) {
                    TableField tableField = new TableField();
                    String columnName = resultSet.getString("COLUMN_NAME");
                    tableField.setPrimaryKey(false);
                    if (StringUtils.isNotBlank(primaryKey) && primaryKey.equals(columnName)) {
                        tableField.setPrimaryKey(true);
                    }
                    tableField.setName(columnName);
                    tableField.setType(resultSet.getString("TYPE_NAME"));
                    tableField.setComment(resultSet.getString("REMARKS"));
                    Object nullable = resultSet.getObject("IS_NULLABLE");
                    tableField.setNullable(Boolean.TRUE.toString().equals(nullable.toString()));
                    tableFields.add(tableField);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            throw new DataSourcePluginException("get table fields failed", e);
        }
        return tableFields;
    }

    @Override
    public Map<String, List<TableField>> getTableFields(
            @NonNull String pluginName,
            @NonNull Map<String, String> requestParams,
            @NonNull String database,
            @NonNull List<String> tables) {
        return tables.parallelStream()
                .collect(
                        Collectors.toMap(
                                Function.identity(),
                                table ->
                                        getTableFields(
                                                pluginName, requestParams, database, table)));
    }

    private String getPrimaryKey(DatabaseMetaData metaData, String dbName, String tableName)
            throws SQLException {
        ResultSet primaryKeysInfo = metaData.getPrimaryKeys(dbName, "%", tableName);
        while (primaryKeysInfo.next()) {
            return primaryKeysInfo.getString("COLUMN_NAME");
        }
        return null;
    }

    private Connection getConnection(Map<String, String> requestParams)
            throws SQLException, ClassNotFoundException {
        return getConnection(requestParams, null);
    }

    private static Connection getConnection(Map<String, String> requestParams, String databaseName)
            throws SQLException, ClassNotFoundException {
        // Ensure the SQLite JDBC driver is loaded
        Class.forName("org.sqlite.JDBC");

        // Assuming URL does not actually need to be modified for this SQLite example
        String url = requestParams.get("url");

        // SQLite does not use username/password by default, but let's keep the logic
        if (requestParams.containsKey("USER")) {
            String username = requestParams.get("USER");
            String password = requestParams.get("PASSWORD");
            return DriverManager.getConnection(url, username, password);
        }
        return DriverManager.getConnection(url);
    }
}
