const { spawn } = require('child_process')

const App = require('./App')
const { buildCPP, buildGo } = require('./buildExecutables')

// Static property
let _processes = []
module.exports = class {
    static get processes() {
        return _processes
    }

    static async createNewUserProcesses(userID) {
        let app = this._spawnNewPython(userID)
        const python = await app.fetchOutput()

        app = this._spawnNewNodeJS(userID)
        const nodejs = await app.fetchOutput()

        app = this._spawnNewJava(userID)
        const java = await app.fetchOutput()

        app = this._spawnNewRust(userID)
        const rust = await app.fetchOutput()

        app = this._spawnNewR(userID)
        const r = await app.fetchOutput()

        await buildGo()
        app = this._spawnNewGo(userID)
        const go = await app.fetchOutput()

        await buildCPP()
        app = this._spawnNewCPP(userID)
        const cpp = await app.fetchOutput()

        return { python, nodejs, java, go, rust, cpp, r }
    }

    static userProcessExists(userID) {
        return this.processes.indexOf(app => app.userID === userID) >= 0
    }

    static fetchUserProcess(userID, type) {
        return this.processes.filter(app => app.userID === userID && app.type[type])[0]
    }


    static _pushAndReturnApp({ process, userID, name }) {
        const type = {}
        type[name] = true

        const app = new App(process, userID, type)

        this.processes.push(app)
        return app
    }

    static _spawnNewPython(userID) {
        const python = spawn('python', ['main.py'], {
            cwd: 'lib/python'
        })
        return this._pushAndReturnApp({ process: python, userID, name: 'python' })
    }

    static _spawnNewNodeJS(userID) {
        const nodejs = spawn('node', ['src/index.js'], {
            cwd: 'lib/nodejs'
        })

        return this._pushAndReturnApp({ process: nodejs, userID, name: 'nodejs' })
    }

    static _spawnNewJava(userID) {
        const java = spawn("java", ["-Dfile.encoding=UTF-8", "-classpath", "./out/production/java", "com.eliudarudo.cliapp.Main"], {
            cwd: 'lib/java'
        })
        return this._pushAndReturnApp({ process: java, userID, name: 'java' })
    }

    static _spawnNewGo(userID) {
        const go = spawn("./go-cli-app", [], {
            cwd: 'lib/go/src/github.com/eliudarudo/go-cli-app'
        })
        return this._pushAndReturnApp({ process: go, userID, name: 'go' })
    }

    static _spawnNewRust(userID) {
        const rust = spawn('cargo', ['run'], {
            cwd: 'lib/rust'
        })
        return this._pushAndReturnApp({ process: rust, userID, name: 'rust' })
    }

    static _spawnNewCPP(userID) {
        const cpp = spawn("./main", ["testing"], {
            cwd: 'lib/c++/bin'
        })
        return this._pushAndReturnApp({ process: cpp, userID, name: 'cpp' })
    }

    static _spawnNewR(userID) {
        const r = spawn("R", ["--vanilla"], {
            cwd: "lib/r/src"
        })
        return this._pushAndReturnApp({ process: r, userID, name: 'r' })
    }


    static _spawnNewDart(userID) { }


    static cleanUserApps(userID) {
        const apps = this.processes.filter(app => app.userID === userID)
        apps.forEach(app => app.kill())
    }

}



