#!/bin/sh
rm /bin/sh && ln -s /bin/bash /bin/sh
service mysql start
cd ${SEATUNNEL_HOME} && ./bin/seatunnel-cluster.sh -d
sh ${SEATUNNEL_WEB_HOME}/script/init_sql.sh
cd ${SEATUNNEL_WEB_HOME} && sh bin/seatunnel-backend-daemon.sh start
while true; do sleep 1000; done
