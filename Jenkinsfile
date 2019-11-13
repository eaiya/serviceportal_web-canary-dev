node { 
    stage 'Check Out Code Repository'
        checkout scm
    stage 'build prject'
        sh 'npm install'
    stage 'build prject'
        sh 'npm run serve'
    stage 'build prject'
        sh 'npm run build'
    tools {nodejs "node"}



}
