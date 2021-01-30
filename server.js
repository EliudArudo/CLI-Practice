const express = require('express')
const { spawn } = require('child_process')

const app = express()
const port = process.env.PORT || 3000

/* Dev environment on Windows */
// let python = spawn('python', ['main.py'], {
//     cwd: 'lib/python'
// });


/* 
  Docker - https://pythonspeed.com/articles/base-image-python-docker-images/
*/
/* Production environment */
// let python = spawn('python3', ['main.py'], {
//     cwd: 'lib/python'
// });

// let dart = spawn('dart', ['lib/main.dart'], {
//     cwd: 'lib/dart'
// });

let nodejs = spawn('node', ['src/index.js'], {
    cwd: 'lib/nodejs'
});

// let rust = spawn('cargo', ['run'], {
//     cwd: 'lib/rust'
// });


/* 
  cd into package, go mod init github.com...
  go build
  ./go-cli-app.exe // or linux version
*/

// let go_build = spawn("go mod init github.com/eliudarudo/go-cli-app && go build .", {
//     shell: true, // enables us to use &&
//     cwd: 'lib/go/src/github.com/eliudarudo/go-cli-app'
// });
// let go_run = spawn("./go-cli-app.exe", [], {
//     cwd: 'lib/go/src/github.com/eliudarudo/go-cli-app'
// });


/* 
   Docker - https://hub.docker.com/r/frolvlad/alpine-gxx/tags?page=1&ordering=last_updated
*/
// let cpp_build = spawn("make", {
//     shell: true, // enables us to use &&
//     cwd: 'lib/c++'
// });
// let cpp_run = spawn("./main.exe", ["testing"], {
//     cwd: 'lib/c++/bin'
// });

/* 
  Docker - https://stackoverflow.com/questions/53669151/java-11-application-as-lightweight-docker-image
*/
// let java = spawn("java", ["-Dfile.encoding=UTF-8", "-classpath", "./out/production/java", "com.eliudarudo.cliapp.Main"], {
//     cwd: 'lib/java'
// })


/* 
   Can also now use 'Rsript main.r' 
   Docker - https://github.com/r-hub/r-minimal/blob/master/Dockerfile
*/
// let r = spawn("R", ["--vanilla"], {
//     cwd: "lib/r/src"
// })
// r.stdin.write("source('main.r')\n");


let console_app = nodejs

console_app.stdout.on('data', function (data) {
    console.log(data.toString())
})


let errChunks = []
console_app.stderr.on('data', function (data) {
    errChunks = errChunks.concat(data);
})


console_app.stderr.on('end', function (data) {
    var stderrContent = (Buffer.concat(errChunks)).toString();
    console.log(stderrContent);
})


console_app.on('close', (code) => {
    console.log(`Closed with code: ${code}`)
})

console_app.stdin.write(`q\n`);



/*
   Test using 'localhost:3000/<input>, e.g 1/2/3/a/b'
*/

// app.get('/send/:val', (req, res) => {
//     const val = req.params.val
//     console_app.stdin.write(`${val}\n`);

//     res.send()
// })


// app.listen(port, () => {
//     console.log(`Express listening on port: ${port}`)
// })