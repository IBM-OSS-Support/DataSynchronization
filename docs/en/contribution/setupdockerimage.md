# Dockerizing DataSynchronization

## Prerequisites
 Podman is   installed and it is running.
See the [Podman website](https://podman.io/docs/installation) for installation instructions.

`Note:we can use docker as well for build and run the container.Please use Podman`if you need to push the image in the registry and reuse in multiple environments, 
## Build
Steps to build image:

 1. ### Clone repo
  ```
   git clone https://github.com/IBM-developers/DataSynchronization.git
   ```
 2. ### Build the binary for the Engine and UI
 
  * #### To build the binary for Engine follow the below steps 

    change to the project directory
     ```
     cd DataSynchronization
     ```
     compile the code using below commands to create binary
    ```
      mvn spotless:apply 
     ./mvnw -U -T 1C clean install -DskipTests -D"maven.test.skip"=true -D"maven.javadoc.skip"=true -D"checkstyle.skip"=true -D"license.skipAddThirdParty"

    ```


    Then you can find the installer package in dir `seatunnel-dist/target/apache-seatunnel-${project.version}.tar.gz`.
     
  * #### To build the binary for Web UI follow the below steps
    change to the project directory for web
     ```
     cd DataSynchronization/web
     ```
      compile the code using below commands to create binary 
     ```
     mvn spotless:apply
     sh build.sh code
     ```
     Then you can find the installer package in dir `seatunnel-web-dist/target/apache-seatunnel-web-${project.version}.tar.gz`.

   3. ### Copy the Binaries for building the image
      to create the image we need to copy both of the binaries in to the directory where Dockerfile is present `DataSynchronization/docker`
   4. ### Build the image

      use the below command to build the image using podman
      ```
      cd  DataSynchronization/docker
      podman build -t imagename:tag .
      ```
      for testing and using the image you can follow the below link [image testing](https://github.com/IBM-developers/DataSynchronization#step-3)