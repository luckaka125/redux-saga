pipeline {
    agent {
        label 'master'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deliver') {
            steps {
                sh 'chmod +x ./jenkins/scripts/deliver.sh'
                sh './jenkins/scripts/deliver.sh'
            }
        }
    }
}