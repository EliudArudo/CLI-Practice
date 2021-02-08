import * as axiosData from 'axios'

const axios = axiosData.default

export class ApiProvider {
    // private baseRoute: string = "http://localhost:4000"
    private baseRoute: string = "https://server-yydmvovnoa-uc.a.run.app"

    constructor() { }

    private checkInternetConnection(): void {
        if (!navigator.onLine)
            throw ({ message: 'Please switch on your internet first' })
    }

    async sendInput(type: string, command: string, userID: string, token: string): Promise<any> {
        try {

            this.checkInternetConnection()

            const url = this.baseRoute + `/console/apps/${type}/command/${token}`

            const response = await axios({
                url,
                method: 'POST',
                data: { userID, command }
            })

            return response.data

        } catch (e) {
            const errorMessage: string =
                e.response ? e.response.data :
                    e.message ? e.message
                        : 'Please try again later'

            throw (errorMessage)
        }
    }


    async refresh(type: string, userID: string, token: string): Promise<any> {
        try {

            this.checkInternetConnection()

            const url = this.baseRoute + `/console/apps/${type}/refresh/${token}`

            const response = await axios({
                url,
                method: 'POST',
                data: { userID }
            })

            return response.data

        } catch (e) {
            const errorMessage: string =
                e.response ? e.response.data :
                    e.message ? e.message
                        : 'Please try again later'

            throw (errorMessage)
        }
    }

}

