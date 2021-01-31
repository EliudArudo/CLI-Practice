const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const server = http.createServer(app)
const IO = socketIO(server)

const { verifyToken, attachIDToToken } = require('./middleware')
const AppManager = require('./AppManager')

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

/* Make sure client socket.io-client library is 2.4.0*/


/* 
   SOCKET OPS
   Client 
     const socket = io("http://localhost:8080/", { query: `userID=${userID}` })
*/
IO.origins(["*:*", "http://localhost:8080"])
IO.on('connection', async socket => {
  const userID = socket.handshake.query.userID

  socket.on('disconnect', _ => {
    AppManager.cleanUserApps(userID)
  })

  const messages = await AppManager.createNewUserProcesses(userID)
  socket.emit('console-messages', messages)
})


/* ROUTE CONTROLLERS */
app.get('/', (req, res) => {
  res.send({ message: 'Server is healthy' })
})

// PRODUCTION
app.post('/console/apps/:type/:token', verifyToken, attachIDToToken, async (req, res) => {
  // DEVELOPMENT
  // app.post('/console/apps/:type/:userID', verifyToken, attachIDToToken, async (req, res) => {
  try {
    const { type } = req.params
    const { userID, command } = req.body

    // DEVELOPMENT
    // const { type, userID } = req.params
    // const { command } = req.body

    // let app
    // let message

    // if (!AppManager.userProcessExists(userID)) {
    //   await AppManager.createNewUserProcesses(userID)

    //   app = await AppManager.fetchUserProcess(userID, type)
    //   await app.fetchOutput()
    //   app.enterCommand(command)
    //   message = await app.fetchOutput()
    // } else {

    //   app = await AppManager.fetchUserProcess(userID, type)

    //   app.enterCommand(command)
    //   message = await app.fetchOutput()
    // }
    // DEVELOPMENT

    app = await AppManager.fetchUserProcess(userID, type)

    app.enterCommand(command)
    const message = await app.fetchOutput()

    res.send(message)
  } catch (e) {
    res.status(500).send('Sorry, the error is being fixed as fast as possible')
  }
})

app.use((req, res) => {
  res.status(404).send('Request does not match any route or method in server');
})





server.listen(PORT, async () => {
  console.log(`Express listening on port: ${PORT}`)
})