const express = require('express')

const app = express()
const port = process.env.PORT || 3000


const AppManager = require('./AppManager')


/* Dev environment on Windows */

// let python = spawn('python', ['main.py'], {
//     cwd: 'lib/python'
// });

/* 
  Docker - https://pythonspeed.com/articles/base-image-python-docker-images/
  Docker - https://stackoverflow.com/questions/53669151/java-11-application-as-lightweight-docker-image
  Docker - https://hub.docker.com/r/frolvlad/alpine-gxx/tags?page=1&ordering=last_updated
  Docker - https://github.com/r-hub/r-minimal/blob/master/Dockerfile

  Fastest way to fetch object from an array
  https://stackoverflow.com/questions/10557486/in-an-array-of-objects-fastest-way-to-find-the-index-of-an-object-whose-attribu
*/

/*
   Test using 'localhost:3000/<input>, e.g 1/2/3/a/b'
*/


app.get('/send/:val', (req, res) => {
  const val = req.params.val
  console_app.stdin.write(`${val}\n`);

  res.send()
})


// 
app.listen(port, async () => {
  console.log(`Express listening on port: ${port}`)

  const userID = 'elly'
  const messages = await AppManager.createNewUserProcesses(userID)
  // console.log(messages.cpp)
  const app = AppManager.fetchUserProcess(userID, 'python')

  // NOTE await app.fetchOutput in the beginning and after entering command
  let message = await app.fetchOutput()
  console.log(message)
  // app.enterCommand('F')
  // message = await app.fetchOutput()
  // app.enterCommand('q')
  // message = await app.fetchOutput()
  // app.enterCommand('2')
  // message = await app.fetchOutput()
  // app.enterCommand('A')
  // message = await app.fetchOutput()
  // app.enterCommand('Q')
  // message = await app.fetchOutput()
  // app.enterCommand('q')
  // message = await app.fetchOutput()
  // console.log(message)

  // AppManager.cleanUserApps(userID)
})