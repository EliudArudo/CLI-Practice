const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const server = http.createServer(app)
const IO = socketIO(server)

const { verifyToken, attachIDToToken } = require('./middleware')
const { getToken } = require('./util')
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
  const token = getToken()
  socket.emit('console-messages', { messages, token })
})


/* ROUTE CONTROLLERS */
app.get('/', (req, res) => {
  res.send({ message: 'Server is healthy' })
})

// PRODUCTION
app.post('/console/apps/:type/command/:token', verifyToken, attachIDToToken, async (req, res) => {
  // DEVELOPMENT
  // app.post('/console/apps/:type/command/:userID', async (req, res) => {
  try {


    // DEVELOPMENT
    // const { type, userID } = req.params
    // const { command } = req.body

    // let app
    // let message

    // if (!AppManager.userProcessExists(userID)) {
    //   await AppManager.createNewUserProcesses(userID)
    //   app = await AppManager.fetchUserProcess(userID, type)
    //   await app.fetchOutput()
    // } else
    //   app = await AppManager.fetchUserProcess(userID, type)

    // app.enterCommand(command)
    // message = await app.fetchOutput()

    // PRODUCTION
    const { type } = req.params
    const { userID, command } = req.body

    app = await AppManager.fetchUserProcess(userID, type)

    app.enterCommand(command)
    message = await app.fetchOutput()
    // // Disable the send command button is isClosed === true
    // // Meaning enable the refresh button which will use the route below

    res.send({ message, isClosed: app.isClosed })
  } catch (e) {
    console.log(e)
    res.status(500).send('Sorry, the error is being fixed as fast as possible')
  }
})

// PRODUCTION
app.post('/console/apps/:type/refresh/:token', verifyToken, attachIDToToken, async (req, res) => {
  // DEVELOPMENT
  // app.post('/console/apps/:type/refresh/:userID', async (req, res) => {
  try {

    // DEVELOPMENT
    // const { type, userID } = req.params

    // PRODUCTION
    const { type } = req.params
    const { userID } = req.body

    const app = await AppManager.fetchUserProcess(userID, type)
    const message = await AppManager.spawnNewUserProcess(app)

    res.send(message)
  } catch (e) {
    console.log(e)
    res.status(500).send('Sorry, the error is being fixed as fast as possible')
  }
})

app.use((req, res) => {
  res.status(404).send('Request does not match any route or method in server');
})





server.listen(PORT, async () => {
  console.log(`Express listening on port: ${PORT}`)
})