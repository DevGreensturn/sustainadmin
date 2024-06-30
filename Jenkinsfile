pipeline {
    agent any
  
    tools {nodejs "nodejsv22.3.0"}

    
    environment {
        // Define environment variables if needed
        NODE_ENV = 'UAT'
    }
    
    stages {
        stage('CheCkout') {
            steps {
                // Checkout the code from your version control system (e.g., Jenkis,Sonar,and svn,Git)
                checkout scm
            }
        }
        
        stage('Install dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                // Build your Node.js application (if needed)
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                // Example deployment step using PM2
                sh 'npm install pm2 -g' // Install PM2 globally if not already installed
                sh 'pm2 delete your-app || true' // Stop and delete the app if it's running
                script {
                    // Start your Node.js application with PM2
                    try {
                        sh 'pm2 start npm --name "your-app" -- start'
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error "Deployment failed: ${e.message}"
                    }
                }
            }
        }
    
    stage('Deploy to UAT') {
            steps {
                // Archive the build artifacts (optional)
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true

                // Deploy to UAT server
                sshagent (credentials: ['sshuat']) {
                    sh """
                        scp -r ./build/* ${env.UAT_SERVER}:${env.DEPLOY_DIR}
                    """
                }
            }
        }
        }

    post {
        success {
            // Notification on success (optional)
            echo 'Deployment successful!'
        }
        failure {
            // Send email notification on failure
            emailext (
                subject: "Failed: Deployment of UAT",
                body: "Deployment of uat failed. Please check Jenkins for details.",
                to: "dev1@greensturn.com, pradeep@greensturn.com, pragya@greensturn.com, prachi@greensturn.com, ", // List of email recipients
            )
        }
    }
    }
    
