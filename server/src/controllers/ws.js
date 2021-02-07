const { uuid } = require('uuidv4');

const AppManager = require('../util/AppManager')
const { getToken } = require('../util')

module.exports = function (io) {
    io.origins(["*:*", "http://localhost:3000"])
    /* 
       Make sure client socket.io-client library is 2.4.0

       SOCKET OPS
       Client 
         const socket = io("http://localhost:8080/", { query: `userID=${userID}` })
    */

    io.on('connection', async socket => {

        const USERID = uuid()
        socket.emit('id', USERID)

        socket.on('disconnect', _ => {
            AppManager.cleanUserApps(USERID)
        })

        if (socket.connected) {
            const messages = await AppManager.createNewUserProcesses(USERID)
            const token = getToken(USERID)
            socket.emit('console-messages', { messages, token })
        }
    })
}