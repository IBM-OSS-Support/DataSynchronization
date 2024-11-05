FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive \
    SEATUNNEL_VERSION="2.3.7" \
    SEATUNNEL_HOME="/opt/seatunnel" \
    SEATUNNEL_WEB_VERSION="1.0.2" \
    SEATUNNEL_WEB_HOME="/opt/seatunnel-web" \
    ST_WEB_BASEDIR_PATH="/opt/seatunnel-web" \
    JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64" \
    PATH="$JAVA_HOME/bin:$PATH:$SEATUNNEL_HOME/bin" 
# Install necessary packages
RUN apt-get update && \
    apt-get install -y sudo wget git curl openjdk-11-jdk mysql-server vim && \
    apt-get clean && \
    rm -rf /var/lib/apt/list/*
WORKDIR /opt
# Copy and extract SeaTunnel binaries
COPY apache-seatunnel-${SEATUNNEL_VERSION}-SNAPSHOT-bin.tar.gz .
RUN tar -xzvf apache-seatunnel-${SEATUNNEL_VERSION}-SNAPSHOT-bin.tar.gz && \
    mv apache-seatunnel-${SEATUNNEL_VERSION}-SNAPSHOT $SEATUNNEL_HOME && \
    rm -f apache-seatunnel-${SEATUNNEL_VERSION}-SNAPSHOT-bin.tar.gz
# Copy and extract SeaTunnel Web binaries
COPY apache-seatunnel-web-${SEATUNNEL_WEB_VERSION}-SNAPSHOT.tar.gz .
RUN tar -zxvf apache-seatunnel-web-${SEATUNNEL_WEB_VERSION}-SNAPSHOT.tar.gz && \
    mv apache-seatunnel-web-${SEATUNNEL_WEB_VERSION}-SNAPSHOT $SEATUNNEL_WEB_HOME && \
    rm -f apache-seatunnel-web-${SEATUNNEL_WEB_VERSION}-SNAPSHOT.tar.gz
# Add JVM memory options  to jvm_options file
RUN echo "-Xms2G" >> $SEATUNNEL_HOME/config/jvm_options && \
    echo "-Xmx2G" >> $SEATUNNEL_HOME/config/jvm_options
# Update configurations
# Copy necessary files between components
RUN mkdir -p $SEATUNNEL_HOME/logs $SEATUNNEL_WEB_HOME/logs && \
    cp -r $SEATUNNEL_HOME/config/hazelcast-client.yaml $SEATUNNEL_WEB_HOME/conf/ && \
    cp -r $SEATUNNEL_HOME/connectors/plugin-mapping.properties $SEATUNNEL_WEB_HOME/conf/
COPY aws-java-sdk-bundle-1.12.692.jar  $SEATUNNEL_HOME/lib/
COPY hadoop-aws-3.1.4.jar  $SEATUNNEL_HOME/lib/

# Expose ports
EXPOSE 5173 8801 5801 1433 5000 3306 5701-5715

# Define volumes
VOLUME /var/lib/mysql

# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /entrypoint.sh

# Set entrypoint
ENTRYPOINT ["/entrypoint.sh"]

