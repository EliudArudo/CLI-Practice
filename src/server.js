const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const server = http.createServer(app)

const IO = socketIO(server)
IO.origins(["*:*", "http://localhost:8080"])

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.get('/send/:val', (req, res) => {
  const val = req.params.val
  console_app.stdin.write(`${val}\n`);

  res.send()
})





server.listen(PORT, async () => {
  console.log(`Express listening on port: ${PORT}`)
})