package org.apache.seatunnel.connectors.seatunnel.jdbc.catalog.sqlite;

import org.apache.seatunnel.api.table.catalog.DataTypeConvertor;
import org.apache.seatunnel.api.table.catalog.exception.CatalogException;
import org.apache.seatunnel.api.table.type.BasicType;
import org.apache.seatunnel.api.table.type.SeaTunnelDataType;
import org.apache.seatunnel.api.table.type.SqlType;

import com.google.auto.service.AutoService;

import java.util.Collections;
import java.util.Map;

import static com.google.common.base.Preconditions.checkNotNull;

@AutoService(DataTypeConvertor.class)
public class SqliteDataTypeConvertor implements DataTypeConvertor<String> {

    /* Data type constants for SQLite */
    private static final String SQLITE_INTEGER = "INTEGER";
    private static final String SQLITE_REAL = "REAL";
    private static final String SQLITE_TEXT = "TEXT";
    private static final String SQLITE_BLOB = "BLOB";
    // Add more SQLite data types as needed

    @Override
    public SeaTunnelDataType<?> toSeaTunnelType(String field, String connectorDataType) {
        return toSeaTunnelType(connectorDataType, Collections.emptyMap());
    }

    @Override
    public SeaTunnelDataType<?> toSeaTunnelType(
            String field, String connectorDataType, Map<String, Object> dataTypeProperties) {
        return toSeaTunnelType(connectorDataType, dataTypeProperties);
    }

    @Override
    public String toConnectorType(
            String field,
            SeaTunnelDataType<?> seaTunnelDataType,
            Map<String, Object> dataTypeProperties) {
        return toConnectorType(seaTunnelDataType, dataTypeProperties);
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    public SeaTunnelDataType<?> toSeaTunnelType(
            String connectorDataType, Map<String, Object> dataTypeProperties)
            throws CatalogException {
        checkNotNull(connectorDataType, "connectorDataType cannot be null");

        switch (connectorDataType.toUpperCase()) {
            case SQLITE_INTEGER:
                return BasicType.LONG_TYPE;
            case SQLITE_REAL:
                return BasicType.DOUBLE_TYPE;
            case SQLITE_TEXT:
                return BasicType.STRING_TYPE;
            case SQLITE_BLOB:
                return BasicType.BYTE_TYPE;
                // Add cases for additional SQLite data types as necessary
            default:
                throw new UnsupportedOperationException(
                        String.format("Doesn't support SQLite type '%s' yet.", connectorDataType));
        }
    }

    public SqliteDataTypeConvertor() {
        super();
    }

    public String toConnectorType(
            SeaTunnelDataType<?> seaTunnelDataType, Map<String, Object> dataTypeProperties)
            throws CatalogException {
        checkNotNull(seaTunnelDataType, "seaTunnelDataType cannot be null");
        SqlType sqlType = seaTunnelDataType.getSqlType();

        switch (sqlType) {
            case BIGINT:
            case INT:
            case SMALLINT:
                return SQLITE_INTEGER;
            case FLOAT:
            case DOUBLE:
                return SQLITE_REAL;
            case STRING:
                return SQLITE_TEXT;
            case BYTES:
                return SQLITE_BLOB;
                // Map additional SeaTunnel types to SQLite types as necessary
            default:
                throw new UnsupportedOperationException(
                        String.format(
                                "Doesn't support SeaTunnel type '%s' yet.", seaTunnelDataType));
        }
    }

    @Override
    public String getIdentity() {
        return "Sqlite";
    }
}
