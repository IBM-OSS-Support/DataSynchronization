# DataSynchronization

## About DataSynchronization

### What is DataSynchronization?

DataSynchronization is easy to use, high performing data integration solution designed for seamless real-time synchronization of large datasets. It excels in consistent synchronization of tens of billions of records on a daily basis with zero data loss. IBM Data Synchronization combines the power of Open Source Apache SeaTunnel with support for hundreds of data connectors to provide a seamless data integration experience.


* IBM Community Blogpost: https://community.ibm.com/community/user/dataops/blogs/harsh-mittal/2024/01/06/ibm-data-synchronisation-launch-announcement
* User Guide for the DataSynchronization UI: https://community.ibm.com/community/user/dataops/blogs/harsh-mittal/2024/01/08/creating-your-first-ibm-data-synchronization-job

### Why do we need DataSynchronization?

In the realm of modern data management, DataSynchronization proves to be an essential tool. By combining the capabilities of [Apache SeaTunnel OSS](https://seatunnel.apache.org/) with the functionality of IBM UI, it offers reliable performance, a user-friendly design, and real-time synchronization, along with other key features.

For enterprises and users grappling with the complexities of contemporary data management, DataSynchronization emerges as a practical solution. Serving as a one-step solution for Data Integration and Synchronization needs, it provides a straightforward approach to address the challenges associated with managing data in today's landscape. Whether you're dealing with intricate datasets or streamlining data processes, DataSynchronization is a strategic choice for effective and efficient data management.

DataSynchronization offers a containerized solution for data integration and synchronization, making it easy to deploy and scale across environments. With improved security, user-friendly UI, built-in testing, and seamless integration, it ensures faster deployments and better management of complex data workflows.


## How do I download DataSynchronization?

### Step 1

Pull the image from our GHCR  by running the following command:

for docker
```
docker pull ghcr.io/ibm-developers/datasynchronization:<version>
```
for podman
```
podman pull ghcr.io/ibm-developers/datasynchronization:<version>
```
Example:
```
docker pull ghcr.io/ibm-developers/datasynchronization:2.3.6.1
```

### Step 2

Check the image is pulled by running the command:

```
docker images
```
or 
### Step 3

Create the following persistent volumes:

* For user data:
```
docker volume create <user_data>
```
where <user_data> is the volume for storing the user data.

* Run the following command to check if the volume is created:
```
docker volume ls
```

### Step 4

Get the Docker container up and running using the following command:
**Add some information of what is MYSQL_ROOT_PASSWORD** Can we use this opportunity to set UI password

```
docker run -d  -e MYSQL_ROOT_PASSWORD=<your_password>  -e "TZ=<your timezone>" -v <user_data>:/var/lib/mysql --name datasynchronization -p 8801:8801 ghcr.io/ibm-developers/datasynchronization:<version>
```
where `<user_data>` is the volume created for storing user data

```
NOTE:
If you are using any other way to connect to your database server other than IP address, please use --add-host option to the above docker run command to specify the server name or add the IP address and server name to the /etc/hosts file in a running container. 
```


### Step 5

* Check the container is up and running and other details about the container by using the following command:

```
docker ps -a
```

* Check the container deployment logs using the following command:
```
docker logs datasynchronization
```

## Deploying a connector plugin using a config file

### From the command line:


 * From the host machine:

Make sure the configuration file exists inside the container, if not, use docker cp or place the config file in the shared mount volume between the host and the container and run the following command:

```
docker exec -it bash -c '$SEATUNNEL_HOME/bin/seatunnel.sh --config /path/to/config/file' datasynchronization
```

where `$SEATUNNEL_HOME` is `/opt/seatunnel`

#### From inside the container:

* Run the following command to get an interactive bash shell in the container:

```
docker exec -it datasynchronization bash
```

* Create a config file if it doesn't exist.

* Run the following command to deploy the connector configuration file:

```
$SEATUNNEL_HOME/bin/seatunnel.sh --config /path/to/config/file
```

where `$SEATUNNEL_HOME` is `/opt/seatunnel`

## Restarting the container:

In case a running container stops or exits, perform either of the following steps to restart the container:

### Restarting as the old container:

* Run the following command to get the stopped/exited container ID:

```
docker ps -a
```

* Run the following command to start the stopped container:

```
docker start datasynchronization
```


* Check if the container is up and running by issuing the following command:

```
docker ps -a
```

### Restarting as a new container:

* Run the following command to deploy a new DataSynchronization container without any data loss from the stopped container:

```
docker run -d  -e MYSQL_ROOT_PASSWORD=your_password  -e "<your_time-zone>" -v <user_data>:/var/lib/mysql --name datasynchronization -p 8801:8801 ghcr.io/ibm-developers/datasynchronization:<version>
```
where `<user_data>` is the persistent volume for the user data in the stopped container.

* Check if the container is up and running by issuing the following command:

```
docker ps -a
```

## Updating the container:

In case you want to update the container, perform the following steps:

* Stop the container that needs to be updated:

```
docker stop datasynchronization
```

* Pull the version of the DataSynchronization image that you want to update your container to:

```
docker pull ghcr.io/ibm-developers/datasynchronization:<version>
```

* Run the following command to deploy a DataSynchronization container from this new image without any data loss from the stopped container:

```
docker run -d  -e MYSQL_ROOT_PASSWORD=your_password  -e "TZ=<your_time-zone>" -v <user_data>:/var/lib/mysql --name datasynchronization -p 8801:8801 ghcr.io/ibm-developers/datasynchronization:<version>
```
where `<user_data>` is the persistent volume for the user data in the stopped container.

* Check if the container is up and running by issuing the following command:

```
docker ps -a
```

### From the UI:

Access the UI using the following link: `http://<host_ip>:8801/ui/`

where `<host_ip>` is the IP address of the host machine. 

The login credentials to access the UI are: 
* `Username: admin`
* `Password: IBM@DATA#SYNC@2024` 

Refer the below video for how to use Datasynchronization-UI

![Datasynchronization-ui](media/Datasynchronization-ui.gif)

# What's new in datasynchronization-2.3.6.1

* **SQL-Based Task Creation**: Support for creating DataSynchronization tasks using SQL, in addition to the existing HOCON format.
* **Kafka as Virtual Table**: Kafka topics can be managed as virtual tables, enabling real-time data processing and flexible transformations within the DataSynchronization interface.
* **Full SQL Transformation Support**: Improved support for SQL transformations to address integration job issues, with a structured graphical interface for managing data pipelines.
* **WatsonX.data Integration**: Enhanced ETL capabilities and real-time data transformation to integrate with WatsonX.data for streamlined data management and analytics.
* **Hazelcast Cluster and Database Connectivity Dashboard**: New dashboard to monitor Hazelcast cluster health and database connectivity, tracking key metrics like active nodes, connection counts, and system load.
* **User-Defined Parameter Functions and New Connectors**: Added support for user-defined parameter functions and multiple connectors (e.g., Presto, Db2, Trino Sink), along with updates to SQL transform functionality and Zeta Engine.

For more details refer to the [Announcement Blog](https://ibm.ent.box.com/notes/1654272849437)
## How to Create Docker image 
Refer to this [setup docker image](docs/en/contribution/setupdockerimage.md) to create your own docker image 

## How to Contribute
Refer to this [Guildlines](docs/en/contribution/CONTRIBUTING.md) to contribute to our project.
## Contact Us 
-  at: **venkataneehar@ibm.com**, **athira.k.m@ibm.com**

# Troubleshooting

* If you face any issues, use the following link to register and post the issue: https://community.ibm.com/community/user/dataops/blogs/harsh-mittal/2024/01/08/creating-your-first-ibm-data-synchronization-job
