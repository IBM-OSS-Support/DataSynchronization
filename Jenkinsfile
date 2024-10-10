pipeline {
    agent { label 'centos1' }
    environment {
        dockerImage = 'seatunnel'
        dockerTag = sh(script: 'date "+%Y%m%d%H%M%S"', returnStdout: true).trim()
        dockerHubRegistry   = 'ibmopensource'
        ARTIFACTORY_ACCESS_TOKEN = credentials('ARTIFACTORY_ACCESS_TOKEN')
//        PAT_PATIALA = credentials('PAT_PATIALA')
        DOCKERHUB_USERNAME = credentials('docker_patiala_cred')
        DOCKERHUB_PASSWORD = credentials('docker_patiala_cred')
        
        FILE_PATH = '/var/lib/jenkins/workspace/ngine_vulnerability-fix-combined/tt_client/tt_v1.6.0/linux_x86_64'
        
    }
    stages {
        stage('Preparation') {
            steps {
                cleanWs()
                   }
        }
        stage('Checkout') {
            steps {
                // Check out code from Git
                script {
                    def gitBranch = 'unknown_exception_fix'
                    def gitRepo = 'https://github.ibm.com/Support-OSS/patiala-SeaTunnel-Engine.git'
                    checkout([$class: 'GitSCM', branches: [[name: "*/${gitBranch}"]],
                              doGenerateSubmoduleConfigurations: false,
                              extensions: [[$class: 'CleanCheckout'], [$class: 'CloneOption', noTags: false, reference: '', shallow: false, timeout: 1]],
                              submoduleCfg: [],
                              userRemoteConfigs: [[credentialsId: 'Git-Hub-Cred', url: "${gitRepo}"]]])
                }
            }
        }   
        stage('Docker Build') {
            steps {
                // Execute Docker build commands here
                sh """
                docker build --build-arg GITHUB_TKN=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 --no-cache -t ${dockerImage}:${dockerTag} -f docker/Dockerfile .              
                docker images
                """    
            }
        }   
     
        stage('TwistLock Scanning') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'w3-credentials', passwordVariable: 'Password', usernameVariable: 'Username')]) {
                    script {
                        // Set the environment variables for your shell script
                        env.MY_USERNAME="Patiala@ibm.com"
                        env.MY_PASSWORD="functionaluser@1234"

                        sh """
                        echo "=========================================================="
                        echo "Downloading Twistlock latest executable file"
                        curl -H "Authorization: Bearer cmVmdGtuOjAxOjE3MDQ5NDE5NTU6S0xNdHB6blZZWU5SaVR0Z0RyeDN4SFBYeXNN" https://na.artifactory.swg-devops.com/artifactory/css-ets-scs-consec-team-public-generic-local/Twistlock%20Executable/tt_latest.zip --output tt_latest.zip
                        echo "=========================================================="
                        echo "Extracting files . . ."
                        unzip tt_latest.zip -d tt_client
                        echo "=========================================================="
                        echo "Changing tt executable . . ."
                        cd tt_client/tt_*/linux_x86_64
                        chmod +x tt
                        echo "=========================================================="
                        echo "Installing uuid-runtime and file"
                        echo "=========================================================="
                        echo "Checking tt dependencies . . ."
                        ./tt check-dependencies
                        echo "=========================================================="
                        echo "Scan Running"
./tt images local-scan --user $MY_USERNAME:$MY_PASSWORD --url "https://w3twistlock.sos.ibm.com" --control-group PSIRT_PRD0013178 ${dockerImage}:${dockerTag} --output-format csv
                        """
                    }
                }
            }
        }                      
    }
}
