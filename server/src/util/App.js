module.exports = class {
    constructor(process, userID, type) {
        if (type === 'r')
            process.stdin.write("source('main.r')\n")

        this._process = process
        this._userID = userID
        this._message = ""
        this._selection = ""
        this._type = type
        this._closed = false

        this._setup()
    }

    get userID() {
        return this._userID
    }

    get type() {
        return this._type
    }

    get isClosed() {
        return this._closed
    }

    _setup() {
        console.log(`Launching process with PID: ${this._process.pid}`)
        this._process.stdout.on('data', data => {
            // console.log(data.toString())
            this._message += data.toString()
        })

        let errChunks = []
        this._process.stderr.on('data', data => {
            errChunks = errChunks.concat(data);
        })

        this._process.stderr.on('end', () => {
            const stderrContent = (Buffer.concat(errChunks)).toString();
            // console.log(stderrContent);
        })

        this._process.on('close', code => {
            // console.log(`Closed with code: ${code ? code : 0}`)
        })
    }

    enterCommand(value) {
        this._selection = value
        this._process.stdin.write(`${value}\n`);
    }

    _delay(ms) {
        return new Promise(res => setTimeout(res, ms))
    }

    _getModifiedMessage() {
        let array = this._message.split(/(Selection:)|(\(Q to quit\):)|(Thanks for playing our games!)/)
        array = array.filter(Boolean)

        let indices = []

        for (let i = 0; i < array.length; i++) {
            if (array[i] === 'Selection:' || array[i] === '(Q to quit):' || array[i] === 'Thanks for playing our games!')
                indices.push(i)
        }

        // console.log({ indices })
        const endGameIndex = array.indexOf('Thanks for playing our games!')
        // console.log({ endGameIndex })

        let indice = 0

        if (endGameIndex == -1) {
            indice = indices[indices.length - 2]
        } else { // has end
            // console.log({ indices })
            const indexOfIndex = indices.indexOf(endGameIndex)
            // console.log({ indexOfIndex })
            // console.log({ at1: indices[indexOfIndex - 1], at2: indices[indexOfIndex] })
            indice = indices[indexOfIndex - 1]
            this._closed = true
        }

        array.splice(indice + 1, 0, ` ${this._selection}`)
        // console.log(array.join(""))

        return array.join("") + "\n"
    }

    fetchOutput() {
        return new Promise(async resolve => {
            await this._delay(2000)
            this._message = this._getModifiedMessage()
            resolve(this._message)
        })
    }

    kill() {
        this._process.kill('SIGINT')
    }
}
