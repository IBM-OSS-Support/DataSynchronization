package org.apache.seatunnel.connectors.seatunnel.jdbc.catalog.sqlite;

import com.google.auto.service.AutoService;
import org.apache.seatunnel.api.table.catalog.DataTypeConvertException;
import org.apache.seatunnel.api.table.catalog.DataTypeConvertor;
import org.apache.seatunnel.api.table.type.*;

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
    public SeaTunnelDataType<?> toSeaTunnelType(String connectorDataType) throws DataTypeConvertException {
        // Delegate to the more specific method with an empty properties map
        return toSeaTunnelType(connectorDataType, Collections.emptyMap());
    }

    @Override
    public SeaTunnelDataType<?> toSeaTunnelType(String connectorDataType, Map<String, Object> dataTypeProperties)
            throws DataTypeConvertException {
        checkNotNull(connectorDataType, "connectorDataType cannot be null");

        switch (connectorDataType.toUpperCase()) {
            case SQLITE_INTEGER:
                return BasicType.LONG_TYPE;
            case SQLITE_REAL:
                return BasicType.DOUBLE_TYPE;
            case SQLITE_TEXT:
                return BasicType.STRING_TYPE;
            // Add cases for additional SQLite data types as necessary
            default:
                throw new UnsupportedOperationException(
                        String.format("Doesn't support SQLite type '%s' yet.", connectorDataType));
        }
    }

    @Override
    public String toConnectorType(SeaTunnelDataType<?> seaTunnelDataType, Map<String, Object> dataTypeProperties)
            throws DataTypeConvertException {
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
            // Map additional SeaTunnel types to SQLite types as necessary
            default:
                throw new UnsupportedOperationException(
                        String.format("Doesn't support SeaTunnel type '%s' yet.", seaTunnelDataType));
        }
    }

    @Override
    public String getIdentity() {
        return "Sqlite";
    }
}
