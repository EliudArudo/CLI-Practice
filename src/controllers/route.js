const AppManager = require('../util/AppManager')

const { verifyToken, attachIDToToken } = require('../middleware')

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.send({ message: 'Server is healthy' })
    })

    // PRODUCTION
    // app.post('/console/apps/:type/command/:token', verifyToken, attachIDToToken, async (req, res) => {
    // DEVELOPMENT
    app.post('/console/apps/:type/command/:userID', async (req, res) => {
        try {

            // DEVELOPMENT
            const { type, userID } = req.params
            const { command } = req.body

            let app
            let message

            if (!AppManager.userProcessExists(userID)) {
                await AppManager.createNewUserProcesses(userID)
                app = await AppManager.fetchUserProcess(userID, type)
                await app.fetchOutput()
            } else
                app = await AppManager.fetchUserProcess(userID, type)


            // PRODUCTION
            // const { type } = req.params
            // const { userID, command } = req.body

            // app = await AppManager.fetchUserProcess(userID, type)

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
}