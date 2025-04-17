pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YOUR_USERNAME/cicd-js-website.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh 'curl -X POST https://api.render.com/deploy/srv-xxxxx?key=YOUR_DEPLOY_HOOK_KEY'
            }
        }
    }
}
