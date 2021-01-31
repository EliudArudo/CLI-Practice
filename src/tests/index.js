const AppManager = require('../AppManager')

module.exports.testSingleAppInit = async function () {
    const userID = 'userID1'
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

    AppManager.cleanUserApps(userID)

    process.exit(0)
}