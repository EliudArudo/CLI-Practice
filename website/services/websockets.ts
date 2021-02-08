import * as io from 'socket.io-client'

export class WebsocketsProvider {
    private static $vue: any | null = null

    // private static socketURL: string = "http://localhost:4000/"
    private static socketURL: string = "https://server-yydmvovnoa-uc.a.run.app"

    private static idEvent: string = "id"
    private static consoleMessagesEvent: string = "console-messages"


    constructor() { }

    static async setupListener(rootInstance: any): Promise<void> {
        try {
            console.log('Setting up')
            this.$vue = rootInstance

            const socket = io.connect(this.socketURL)

            socket.on('connect', () => {
                console.log('connected')
            })

            socket.on(this.idEvent, (id: any) => {
                this.$vue.$root.$emit('WEBSOCKETS:ID', id)
            })

            socket.on(this.consoleMessagesEvent, (payload: any) => {
                this.$vue.$root.$emit('WEBSOCKETS:CONSOLE-MESSAGES', payload)
            })

        } catch (e) {
            // console.log(e)
        }
    }


}
