FROM ubuntu:latest
RUN echo "mysql-server mysql-server/root_password password password" | debconf-set-selections
RUN echo "mysql-server mysql-server/root_password_again password password" | debconf-set-selections
RUN apt-get update && apt-get install -y  sudo wget git curl openjdk-11-jdk mysql-server
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
ENV SEATUNNEL_VERSION="2.3.7"
ENV SEATUNNEL_HOME="/opt/seatunnel"
ENV SEATUNNEL_WEB_VERSION="1.0.2"
ENV SEATUNNEL_WEB_HOME="/opt/seatunnel-web"
ENV ST_WEB_BASEDIR_PATH="/opt/seatunnel-web/apache-seatunnel-web-1.0.2-SNAPSHOT"
ENV  PATH=$PATH:$SEATUNNEL_HOME/bin
WORKDIR /opt
RUN cd /opt/
COPY patiala-SeaTunnel-Engine/seatunnel-dist/target/apache-seatunnel-${SEATUNNEL_VERSION}-SNAPSHOT-bin.tar.gz /opt/apache-seatunnel-${SEATUNNEL_VERSION}-SNAPSHOT-bin.tar.gz
COPY patiala-SeaTunnel-web/seatunnel-web-dist/target/apache-seatunnel-web-${SEATUNNEL_WEB_VERSION}-SNAPSHOT.tar.gz /opt/apache-seatunnel-web-${SEATUNNEL_WEB_VERSION}-SNAPSHOT.tar.gz
RUN tar -xzvf apache-seatunnel-${SEATUNNEL_VERSION}-SNAPSHOT-bin.tar.gz
RUN tar -xzvf apache-seatunnel-web-${SEATUNNEL_WEB_VERSION}-SNAPSHOT.tar.gz
RUN mv apache-seatunnel-${SEATUNNEL_VERSION}-SNAPSHOT seatunnel
RUN mv apache-seatunnel-web-${SEATUNNEL_WEB_VERSION}-SNAPSHOT seatunnel-web
RUN sed -i -e '18i JAVA_OPTS="-Xms2G -Xmx2G"' $SEATUNNEL_HOME/bin/seatunnel-cluster.sh
RUN mkdir -p $SEATUNNEL_HOME/logs
RUN sed -i "s|123456|password|g" $SEATUNNEL_WEB_HOME/script/seatunnel_server_env.sh && sed -i "s|123456|password|g" $SEATUNNEL_WEB_HOME/conf/application.yml
RUN cp -r $SEATUNNEL_HOME/config/hazelcast-client.yaml   $SEATUNNEL_WEB_HOME/conf/
RUN cp -r $SEATUNNEL_HOME/connectors/plugin-mapping.properties  $SEATUNNEL_WEB_HOME/conf/
RUN echo '\
    export SEATUNNEL_HOME=/opt/seatunnel \n\
    export ST_WEB_BASEDIR_PATH=/opt/seatunnel-web/apache-seatunnel-web-1.0.2-SNAPSHOT/ \n\
    export PATH=$PATH:$SEATUNNEL_HOME/bin '\
   >> /etc/profile.d/seatunnel.sh
RUN rm -rf /opt/apache-seatunnel-${SEATUNNEL_VERSION}-SNAPSHOT-bin.tar.gz
RUN rm -rf /opt/apache-seatunnel-${SEATUNNEL_WEB_VERSION}-SNAPSHOT.tar.gz
EXPOSE 5173 8801 5801 1433 5000 3306 5701 5702 5703 5704 5705 5706 5707 5708 5709 5710 5711 5712 5713 5714 5715
COPY docker/commands.sh /commands.sh
RUN chmod +x /commands.sh
ENTRYPOINT ["/commands.sh"]
