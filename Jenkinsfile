pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/adhnan190/website.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'  // Use 'bat' for running Windows batch commands
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'  // Running tests using 'npm test' in Windows
            }
        }

        stage('Deploy to Render') {
            steps {
                bat 'curl -X POST https://api.render.com/deploy/srv-d009927gi27c73b20al0?key=TihGMvEtmHs'  // Use 'bat' for curl command in Windows
            }
        }
    }
}

