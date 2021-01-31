const AppManager = require('../util/App')
const { getToken } = require('../util')

module.exports = function (io) {
    io.origins(["*:*", "http://localhost:8080"])
    /* 
       Make sure client socket.io-client library is 2.4.0

       SOCKET OPS
       Client 
         const socket = io("http://localhost:8080/", { query: `userID=${userID}` })
    */

    io.on('connection', async socket => {
        const userID = socket.handshake.query.userID

        socket.on('disconnect', _ => {
            AppManager.cleanUserApps(userID)
        })

        if (socket.connected) {
            const messages = await AppManager.createNewUserProcesses(userID)
            const token = getToken()
            socket.emit('console-messages', { messages, token })
        }
    })
}