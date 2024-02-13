package org.apache.seatunnel.connectors.seatunnel.jdbc.catalog.db2;

import com.google.auto.service.AutoService;
import org.apache.seatunnel.api.table.catalog.DataTypeConvertException;
import org.apache.seatunnel.api.table.catalog.DataTypeConvertor;
import org.apache.seatunnel.api.table.type.*;

import java.util.Collections;
import java.util.Map;

import static com.google.common.base.Preconditions.checkNotNull;

@AutoService(DataTypeConvertor.class)
public class Db2DataTypeConvertor implements DataTypeConvertor<String> {

    /* Data type constants for DB2 */
    private static final String DB2_SMALLINT = "SMALLINT";
    private static final String DB2_INTEGER = "INTEGER";
    private static final String DB2_BIGINT = "BIGINT";
    private static final String DB2_DECIMAL = "DECIMAL";
    private static final String DB2_REAL = "REAL";
    private static final String DB2_DOUBLE = "DOUBLE";
    private static final String DB2_VARCHAR = "VARCHAR";
    private static final String DB2_CHAR = "CHAR";
    private static final String DB2_DATE = "DATE";
    private static final String DB2_TIME = "TIME";
    private static final String DB2_TIMESTAMP = "TIMESTAMP";
    // Add more DB2 data types as needed

    @Override
    public SeaTunnelDataType<?> toSeaTunnelType(String connectorDataType) throws DataTypeConvertException {
        // Delegate to the more specific method with an empty properties map
        return toSeaTunnelType(connectorDataType, Collections.emptyMap());
    }

    @Override
    public SeaTunnelDataType<?> toSeaTunnelType(String connectorDataType, Map<String, Object> dataTypeProperties)
            throws DataTypeConvertException {
        checkNotNull(connectorDataType, "connectorDataType cannot be null");

        switch (connectorDataType) {
            case DB2_SMALLINT:
                return BasicType.SHORT_TYPE;
            case DB2_INTEGER:
                return BasicType.INT_TYPE;
            case DB2_BIGINT:
                return BasicType.LONG_TYPE;
            case DB2_DECIMAL:
                Integer precision = dataTypeProperties.containsKey("precision") ? (Integer) dataTypeProperties.get("precision") : 10;
                Integer scale = dataTypeProperties.containsKey("scale") ? (Integer) dataTypeProperties.get("scale") : 0;
                return new DecimalType(precision, scale);
            case DB2_REAL:
                return BasicType.FLOAT_TYPE;
            case DB2_DOUBLE:
                return BasicType.DOUBLE_TYPE;
            case DB2_CHAR:
            case DB2_VARCHAR:
                return BasicType.STRING_TYPE;
            case DB2_DATE:
                return LocalTimeType.LOCAL_DATE_TYPE;
            case DB2_TIME:
                return LocalTimeType.LOCAL_TIME_TYPE;
            case DB2_TIMESTAMP:
                return LocalTimeType.LOCAL_DATE_TIME_TYPE;
            // Add cases for additional DB2 data types as necessary
            default:
                throw new UnsupportedOperationException(
                        String.format("Doesn't support DB2 type '%s' yet.", connectorDataType));
        }
    }

    @Override
    public String toConnectorType(SeaTunnelDataType<?> seaTunnelDataType, Map<String, Object> dataTypeProperties)
            throws DataTypeConvertException {
        checkNotNull(seaTunnelDataType, "seaTunnelDataType cannot be null");
        SqlType sqlType = seaTunnelDataType.getSqlType();

        switch (sqlType) {
            case SMALLINT:
                return DB2_SMALLINT;
            case INT:
                return DB2_INTEGER;
            case BIGINT:
                return DB2_BIGINT;
            case DECIMAL:
                return DB2_DECIMAL;
            case FLOAT:
                return DB2_REAL;
            case DOUBLE:
                return DB2_DOUBLE;
            case STRING:
                return DB2_VARCHAR;
            case DATE:
                return DB2_DATE;
            case TIME:
                return DB2_TIME;
            case TIMESTAMP:
                return DB2_TIMESTAMP;
            // Map additional SeaTunnel types to DB2 types as necessary
            default:
                throw new UnsupportedOperationException(
                        String.format("Doesn't support SeaTunnel type '%s' yet.", seaTunnelDataType));
        }
    }

    @Override
    public String getIdentity() {
        return "DB2";
    }
}
