const { spawn } = require('child_process')

module.exports.buildCPP = function () {
    return new Promise(resolve => {
        let cppBuildProcess = spawn("rm -rf bin && mkdir bin && make", {
            shell: true, // enables us to use &&
            cwd: 'lib/c++'
        });

        cppBuildProcess.stdout.on('data', function (data) {
            console.log('CPP Build Success: \n', data.toString())
        })


        let errChunks = []
        cppBuildProcess.stderr.on('data', function (data) {
            errChunks = errChunks.concat(data);
        })


        cppBuildProcess.stderr.on('end', function () {
            const stderrContent = (Buffer.concat(errChunks)).toString();
            console.log('CPP Build Message: \n', stderrContent);
        })


        cppBuildProcess.on('close', (code) => {
            console.log(`CPP Build: Closed with code: ${code}`)
            cppBuildProcess.kill('SIGINT')
            resolve(code === 0)
        })

    })
}


module.exports.buildGo = function () {
    return new Promise(function (resolve) {
        let goBuildProcess = spawn("rm -f go.mod && go mod init github.com/eliudarudo/go-cli-app && go build .", {
            shell: true, // enables us to use &&
            cwd: 'lib/go/src/github.com/eliudarudo/go-cli-app'
        });

        goBuildProcess.stdout.on('data', function (data) {
            console.log('Go Build Success: \n', data.toString())
        })


        let errChunks = []
        goBuildProcess.stderr.on('data', function (data) {
            errChunks = errChunks.concat(data);
        })


        goBuildProcess.stderr.on('end', function () {
            const stderrContent = (Buffer.concat(errChunks)).toString();
            console.log('Go Build Message: \n', stderrContent);
        })


        goBuildProcess.on('close', (code) => {
            console.log(`Go Build: Closed with code: ${code}`)
            goBuildProcess.kill('SIGINT')
            resolve(code === 0)
        })
    })
}