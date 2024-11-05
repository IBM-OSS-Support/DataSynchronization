#!/bin/bash


INIT_SCRIPT="${SEATUNNEL_WEB_HOME}/script/init_sql.sh"
ENV_SCRIPT="${SEATUNNEL_WEB_HOME}/script/seatunnel_server_env.sh"
APP_YAML="${SEATUNNEL_WEB_HOME}/conf/application.yml"
cd ${SEATUNNEL_HOME} && ./bin/seatunnel-cluster.sh -d
# Replace the placeholder in the environment script
sed -i "s|123456|${MYSQL_ROOT_PASSWORD}|g" "${ENV_SCRIPT}"
# Replace the placeholder in application.yml
sed -i "s|123456|${MYSQL_ROOT_PASSWORD}|g" "${APP_YAML}"
rm /bin/sh && ln -s /bin/bash /bin/sh
# Ensure that the MySQL password is provided
if [ -z "$MYSQL_ROOT_PASSWORD" ]; then
    echo "Error: MYSQL_ROOT_PASSWORD is not set."
    exit 1
fi
# Start the MySQL service
service mysql start
# Wait for MySQL to start
while ! mysqladmin ping -h "localhost" --silent; do
    sleep 1
done
# Grant necessary privileges if not already set
echo "Checking MySQL user permissions..."
# Modify MySQL root user password
mysql -u root -p"${MYSQL_ROOT_PASSWORD}" <<MYSQL_SCRIPT
ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY '${MYSQL_ROOT_PASSWORD}';
FLUSH PRIVILEGES;
MYSQL_SCRIPT
# Check if the seatunnel database exists
DB_EXISTS=$(mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" -e "SHOW DATABASES LIKE 'seatunnel';" | grep "seatunnel" > /dev/null; echo "$?")
if [ "$DB_EXISTS" -ne 0 ]; then
    echo "Database 'seatunnel' does not exist. Initializing database."
    mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" -e "CREATE DATABASE seatunnel;"
    
    # Run any initialization scripts if needed
    INIT_SCRIPT="${SEATUNNEL_WEB_HOME}/script/init_sql.sh"
    if [ -f "$INIT_SCRIPT" ]; then
        echo "Running initialization script: $INIT_SCRIPT"
        sh "$INIT_SCRIPT"
    fi
else
    echo "Database 'seatunnel' already exists. Skipping initialization."
fi
cd ${SEATUNNEL_WEB_HOME} && sh bin/seatunnel-backend-daemon.sh start
# Keep the container running
tail -f /dev/null

