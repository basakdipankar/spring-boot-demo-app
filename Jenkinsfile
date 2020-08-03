// https://www.jenkins.io/blog/2017/02/07/declarative-maven-project/
// https://www.jenkins.io/doc/tutorials/build-a-java-app-with-maven/
// https://medium.com/@rosaniline/setup-sonarqube-with-jenkins-declarative-pipeline-75bccdc9075f
// https://medium.com/backend-habit/generate-codecoverage-report-with-jacoco-and-sonarqube-ed15c4045885
// https://mkyong.com/maven/maven-jacoco-code-coverage-example/
pipeline {
    agent any
    tools {
      dockerTool 'Docker'
      git 'Default'
      maven 'M3'
      nodejs 'NodeJS'
    }
    
    stages {
        
        stage ('Initialize') {
            environment {
                docker = tool 'Docker'
            }
            steps {
                sh '''
                    echo "PATH = ${PATH}"
                    echo "M2_HOME = ${M2_HOME}"
                    echo "${docker}"
                '''
            }
        }
        
        /*stage('Checkout') {
            steps {
                git credentialsId: 'github_token', url: 'https://github.com/dbasak2013/spring-boot-app.git'
            }
        }*/
        
        stage('Build') {
            steps {
                sh 'mvn -B -DskipTests clean package'
            }
        }
        
        stage('Test') {
            steps {
                //sh 'mvn clean verify'
                sh 'mvn test'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                }
            }
        }
        stage('SonarQube analysis') {
            environment {
                scannerHome = tool 'SonarQube_Scanner'
            }
            steps {
                withSonarQubeEnv(installationName: 'SonarQube_Server', credentialsId: 'sonarqube_jenkins_token') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage("Quality Gate") {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    // Parameter indicates whether to set pipeline to UNSTABLE if Quality Gate fails
                    // true = set pipeline to UNSTABLE, false = don't
                    waitForQualityGate abortPipeline: true
                }
            }
            post {
                failure {
                    mail bcc: '', body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: 'Jenkins CI <dipankar435@yahoo.com>', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: 'dipankar435@yahoo.com';
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                sh label: '', script: 'docker build -t dipankar435/springbootapp .'
            }
        }
        
        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'pass', usernameVariable: 'user')]) {
                    sh label: '', script: "docker login -u ${user} -p ${pass}";
                }
            }
        }
        
        stage('Push Image') {
            steps {
                sh label: '', script: "docker push dipankar435/springbootapp";
            }
        }
        
        stage('GCP Deployment') {
            environment {
                gcp_cred_file=credentials("gcp_service_account")
                ansible_gcp_ssh_key_file=credentials("ansible_gcp_ssh_keys")
            }
            steps {
                sh "ansible-playbook -vvvv gcp_ansible_deployment.yml"
            }
        }
    }
}
