# Set Up Develop Environment

In this section, we are going to show you how to set up your development environment for DataSynchronization, and then run a simple
example in your machine using Terminal.

> You can develop or test DataSynchronization code in any development environment that you like, but here we use Terminal to step and deploy DataSynchronization.


## Prepare

Before we start talking about how to set up the environment, we need to do some preparation work. Make sure you already
have installed the following software:

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed.
* [Java](https://www.java.com/en/download/) ( JDK8/JDK11 and other versions higher than Java 8 can theoretically work)) installed and `JAVA_HOME` set.
* [Maven](https://maven.apache.org/install.html) installed.
* [mysql](https://www.mysql.com/) installed
## Set Up DataSynchronization using CLI
### Clone the Source Code

 Clone the SeaTunnel source code from [GitHub](https://github.com/IBM-OSS-Support/DataSynchronization).
```
 git clone https://github.com/IBM-OSS-Support/DataSynchronization.git 
```
### Code Style
DataSynchronization uses `Spotless` for code style and format checks. You can run the following command and `Spotless` will automatically fix the code style and formatting errors for you:
```
./mvnw spotless:apply
```
### Building DataSynchronization From Source

After you install the maven, you can use the following command to compile and package.
* #### To build the binary for Engine follow the below steps
```
./mvnw -U -T 1C clean install -DskipTests -D"maven.test.skip"=true -D"maven.javadoc.skip"=true -D"checkstyle.skip"=true -D"license.skipAddThirdParty"
```
Then you can find the installer package in dir `seatunnel-dist/target/apache-seatunnel-${project.version}.tar.gz`.
* #### To build the binary for Web UI follow the below steps
Change to the project directory for web
```
cd DataSynchronization/web
```
Compile the code using below commands to create binary 
 ```
   mvn spotless:apply
   sh build.sh code
 ```
 Then you can find the installer package in dir `seatunnel-web-dist/target/apache-seatunnel-web-${project.version}.tar.gz`.

 
 `Note:  If you want to use container for deploy DataSynchronization please follow the link for the next step`
 
  [setupdockerimage.md](setupdockerimage.md)

### Deploy DataSynchronization
#### Deploy DataSynchronization engine
* ##### Unzip the tar file for engine 

```
cd DataSynchronization/seatunnel-dist/target/
tar -xvf apache-seatunnel-${project.version}.tar.gz
```

* ##### Config SEATUNNEL_HOME
  
You can config SEATUNNEL_HOME by add /etc/profile.d/seatunnel.sh file. The content of /etc/profile.d/seatunnel.sh
```
export SEATUNNEL_HOME=${seatunnel install path}
export PATH=$PATH:$SEATUNNEL_HOME/bin
```
* ##### Config SeaTunnel Engine JVM options

SeaTunnel Engine supported two ways to set jvm options.

1.Add JVM Options to $SEATUNNEL_HOME/bin/seatunnel-cluster.sh.
Modify the $SEATUNNEL_HOME/bin/seatunnel-cluster.sh file and add JAVA_OPTS="-Xms2G -Xmx2G" in the first line.

2.Add JVM Options when start SeaTunnel Engine. For example seatunnel-cluster.sh -DJvmOption="-Xms2G -Xmx2G"

### Start SeaTunnel Engine Server Node
   Engine be started by a daemon with -d.

```
mkdir -p $SEATUNNEL_HOME/logs
./bin/seatunnel-cluster.sh -d
```

### Run Simple Example using local mode
Make sure the test config file is present inside `$SEATUNNEL_HOME/config directory` or add Job Config File to define a job

Sample config file

```
env {
  execution.parallelism = 1
  job.mode = "BATCH"
}

source {
  FakeSource {
    result_table_name = "fake"
    row.num = 16
    schema = {
      fields {
        name = "string"
        age = "int"
      }
    }
  }
}

transform {
  FieldMapper {
    source_table_name = "fake"
    result_table_name = "fake1"
    field_mapper = {
      age = age
      name = new_name
    }
  }
}

sink {
  Console {
    source_table_name = "fake1"
  }
}
```

* ##### Submit a Job in engine

```
 $SEATUNNEL_HOME/bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template -m local
```
### Deploy DataSynchronization web
* Unzip the tar file for
Web
```
cd DataSynchronization/web/
tar -xvf apache-seatunnel-web-${project.version}.tar.gz
```
* Init database
1.Edit apache-seatunnel-web-${project.version}/script/seatunnel_server_env.sh file, Complete the installed database address, port, username, and password.
  Here is an example:
```
export HOSTNAME="localhost"
export PORT="3306"
export USERNAME="root"
export PASSWORD="123456"
```
2.Run init shell 

```
sh apache-seatunnel-web-${project.version}/script/init_sql.sh
```
 If there are no errors during operation, it indicates successful initialization.
 
 * Config application and Run SeaTunnel Web Backend Server
Edit `apache-seatunnel-web-${project.version}/conf/application`.yml Fill in the database connection information and DS interface related information in the file.
Edit `apache-seatunnel-web-${project.version}/conf/application.yml` , add jwt.secretKey value. Eg:`https://github.com/IBM-developers/DataSynchronization` Notice that cannot be too short).

* Copy `$SEATUNNEL_HOME/config/hazelcast-client.yaml`to `apache-seatunnel-web-${project.version}/conf/`
* Copy `$SEATUNNEL_HOME/connectors/plugin-mapping.properties` file to `apache-seatunnel-web-${project.version}/conf/` dir.

* ### Start SeaTunnel Web
```
 cd apache-seatunnel-web-${project.version}
 sh bin/seatunnel-backend-daemon.sh start
```
Accessing in a browser http://127.0.0.1:8801/ui/, 

The login credentials to access the UI are:

Username: admin
Password: IBM@DATA#SYNC@2024


Refer the link for how to use [UI](https://github.com/IBM-developers/DataSynchronization/tree/main#from-the-ui)
 

Note: we are using single node for setting up engine and web if you need to use multiple nodes for engine and web please refer[Apache Seatunnel](https://github.com/apache/seatunnel-web?tab=readme-ov-file#314-deploy-seatunnel-zeta-client-in-seatunnel-web-run-node)`
refer below link for the setup using [JetBrains IntelliJ IDEA](https://github.com/apache/seatunnel/blob/dev/docs/en/contribution/setup.md#set-up-develop-environment)

