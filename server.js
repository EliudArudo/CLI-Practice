const express = require('express')
const { spawn } = require('child_process')

const app = express()
const port = process.env.PORT || 3000

let python = spawn('python', ['main.py'], {
    cwd: 'lib/python'
});

// let dart = spawn('dart', ['lib/main.dart'], {
//     cwd: 'lib/dart'
// });

// let nodejs = spawn('node', ['src/index.js'], {
//     cwd: 'lib/nodejs'
// });

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

// let cpp_build = spawn("make", {
//     shell: true, // enables us to use &&
//     cwd: 'lib/c++'
// });
// let cpp_run = spawn("./main.exe", ["testing"], {
//     cwd: 'lib/c++/bin'
// });

// let java = spawn("java", ["-Dfile.encoding=UTF-8", "-classpath", "./out/production/java", "com.eliudarudo.cliapp.Main"], {
//     cwd: 'lib/java'
// })

// let r = spawn("R", ["--vanilla"], {
//     cwd: "lib/r/src"
// })
// r.stdin.write("source('main.r')\n");


let console_app = python

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

/* 
   Test using 'localhost:3000/<input>, e.g 1/2/3/a/b'
*/
app.get('/send/:val', (req, res) => {
    const val = req.params.val
    console_app.stdin.write(`${val}\n`);

    res.send()
})


app.listen(port, () => {
    console.log(`Express listening on port: ${port}`)
})