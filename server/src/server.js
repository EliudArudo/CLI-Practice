const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const server = http.createServer(app)
const IO = socketIO(server)

const PORT = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

require('./controllers/route')(app)
require('./controllers/ws')(IO)

server.listen(PORT, async () => {
  console.log(`Express listening on port: ${PORT}`)
})