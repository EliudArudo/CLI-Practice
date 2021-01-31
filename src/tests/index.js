const AppManager = require('../util/AppManager')

function testSingleAppInit() {
    return new Promise(async resolve => {
        console.log('SINGLE-APP-TEST \n--------------------')
        const USER_ID_1 = "UserID1"
        await AppManager.createNewUserProcesses(USER_ID_1)
        const app = AppManager.fetchUserProcess(USER_ID_1, 'python')

        // NOTE await app.fetchOutput in the beginning and after entering command
        let message = await app.fetchOutput()
        console.log(message)
        AppManager.cleanUserApps(USER_ID_1)
        resolve()
    })
}

function testAllAppsInit() {
    return new Promise(async resolve => {
        console.log('\nALL-APPS-TEST \n--------------------')
        const USER_ID_2 = "UserID2"
        const messages = await AppManager.createNewUserProcesses(USER_ID_2)

        console.log('\nPYTHON \n--------\n', messages.python)
        console.log('\n\nNODEJS \n--------\n', messages.nodejs)
        console.log('\n\nJAVA \n------\n', messages.java)
        console.log('\n\nGO \n----\n', messages.go)
        console.log('\n\nRUST \n------\n', messages.rust)
        console.log('\n\nCPP \n-----\n', messages.cpp)
        console.log('\n\nR \n--\n', messages.r)
        AppManager.cleanUserApps(USER_ID_2)
        resolve()
    })
}

function testOneAppMultipleInputs() {
    return new Promise(async resolve => {
        console.log('\nONE-APP-MULTIPLE-COMMANDS-TEST \n-----------------------------------')
        const USER_ID_3 = "UserID3"
        await AppManager.createNewUserProcesses(USER_ID_3)

        const app = AppManager.fetchUserProcess(USER_ID_3, 'cpp')

        let message = await app.fetchOutput()
        app.enterCommand('1')
        message = await app.fetchOutput()
        app.enterCommand('F')
        message = await app.fetchOutput()
        app.enterCommand('q')
        message = await app.fetchOutput()
        app.enterCommand('2')
        message = await app.fetchOutput()
        app.enterCommand('A')
        message = await app.fetchOutput()
        app.enterCommand('Q')
        message = await app.fetchOutput()
        app.enterCommand('q')
        message = await app.fetchOutput()
        console.log('\nCPP \n----')
        console.log(message)
        AppManager.cleanUserApps(USER_ID_3)

        resolve()
    })
}


async function runTests() {
    await testSingleAppInit()
    await testAllAppsInit()
    await testOneAppMultipleInputs()

    process.exit(0)
}

runTests()