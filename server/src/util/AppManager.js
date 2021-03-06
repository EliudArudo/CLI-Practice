const { spawn } = require('child_process')

const App = require('./App')
const { buildCPP, buildGo } = require('./buildExecutables')


/*
  Docker - https://pythonspeed.com/articles/base-image-python-docker-images/
  Docker - https://stackoverflow.com/questions/53669151/java-11-application-as-lightweight-docker-image
  Docker - https://hub.docker.com/r/frolvlad/alpine-gxx/tags?page=1&ordering=last_updated
  Docker - https://github.com/r-hub/r-minimal/blob/master/Dockerfile

  Fastest way to fetch object from an array
  https://stackoverflow.com/questions/10557486/in-an-array-of-objects-fastest-way-to-find-the-index-of-an-object-whose-attribu
*/

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
        return this.processes.filter(app => app.userID === userID).length > 0
    }

    static fetchUserProcess(userID, type) {
        return this.processes.filter(app => app.userID === userID && app.type === type)[0]
    }

    static spawnNewUserProcess(app) {
        return new Promise(async resolve => {
            _processes = _processes.filter(_app => !((_app.userID === app.userID) && (_app.type === app.type)))
            app.kill()

            const { message } = await this._getAppByType(app)
            resolve(message)
        })
    }

    static async _getAppByType({ userID, type }) {
        let app

        switch (type) {
            case 'python':
                app = this._spawnNewPython(userID)
                break
            case 'nodejs':
                app = this._spawnNewNodeJS(userID)
                break
            case 'java':
                app = this._spawnNewJava(userID)
                break
            case 'go':
                app = this._spawnNewGo(userID)
                break
            case 'rust':
                app = this._spawnNewRust(userID)
                break
            case 'cpp':
                app = this._spawnNewCPP(userID)
                break
            case 'r':
                app = this._spawnNewR(userID)
                break
        }

        const message = await app.fetchOutput()

        return { app, message }
    }

    static _pushAndReturnApp({ process, userID, type }) {
        const app = new App(process, userID, type)

        this.processes.push(app)
        return app
    }

    static _spawnNewPython(userID) {
        const python = spawn('python', ['main.py'], {
            cwd: 'src/lib/python'
        })
        return this._pushAndReturnApp({ process: python, userID, type: 'python' })
    }

    static _spawnNewNodeJS(userID) {
        const nodejs = spawn('node', ['src/index.js'], {
            cwd: 'src/lib/nodejs'
        })

        return this._pushAndReturnApp({ process: nodejs, userID, type: 'nodejs' })
    }

    static _spawnNewJava(userID) {
        const java = spawn("java", ["-Dfile.encoding=UTF-8", "-classpath", "./out/production/java", "com.eliudarudo.cliapp.Main"], {
            cwd: 'src/lib/java'
        })
        return this._pushAndReturnApp({ process: java, userID, type: 'java' })
    }

    static _spawnNewGo(userID) {
        const go = spawn("./go-cli-app", [], {
            cwd: 'src/lib/go/src/github.com/eliudarudo/go-cli-app'
        })
        return this._pushAndReturnApp({ process: go, userID, type: 'go' })
    }

    static _spawnNewRust(userID) {
        const rust = spawn('cargo', ['run'], {
            cwd: 'src/lib/rust'
        })
        return this._pushAndReturnApp({ process: rust, userID, type: 'rust' })
    }

    static _spawnNewCPP(userID) {
        const cpp = spawn("./main", ["testing"], {
            cwd: 'src/lib/c++/bin'
        })
        return this._pushAndReturnApp({ process: cpp, userID, type: 'cpp' })
    }

    static _spawnNewR(userID) {
        const r = spawn("R", ["--vanilla"], {
            cwd: "src/lib/r/src"
        })
        return this._pushAndReturnApp({ process: r, userID, type: 'r' })
    }


    static _spawnNewDart(userID) { }


    static cleanUserApps(userID) {
        const apps = this.processes.filter(app => app.userID === userID)
        apps.forEach(app => app.kill())
    }

}



