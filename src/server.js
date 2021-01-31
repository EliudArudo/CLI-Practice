const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const server = http.createServer(app)
const IO = socketIO(server)

const AppManager = require('./AppManager')

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

/* Make sure client socket.io-client library is 2.4.0*/
IO.origins(["*:*", "http://localhost:8080"])

/* 
   Client 
     const socket = io("http://localhost:8080/", { query: `userID=${userID}` })
*/
IO.on('connection', socket => {
  const userID = socket.handshake.query.userID

  AppManager.createNewUserProcesses(userID)

  socket.on('disconnect', _ => {

  })
})


app.get('/send/:val', (req, res) => {
  const val = req.params.val
  console_app.stdin.write(`${val}\n`);

  res.send()
})





server.listen(PORT, async () => {
  console.log(`Express listening on port: ${PORT}`)
})