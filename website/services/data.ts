import { ApiProvider } from "./api";
import { AxiosResponse } from "axios";


export class DataProvider {

    private token: string = ""
    private userID: string = ""

    private apiProvider = new ApiProvider();

    constructor() { }


    async init(): Promise<void> {
        try {


        } catch (e) {
            // console.log(e)
        }
    }


    updateServiceToken(newToken: string): void {
        this.token = newToken;
    }


    updateUserID(userID: string): void {
        this.userID = userID
    }


    async sendInput(type: string, command: string): Promise<any> {
        try {
            const response = await this.apiProvider.sendInput(type, command, this.userID, this.token)
            return response

        } catch (e) {
            throw (e)
        }
    }

    async refreshApp(type: string): Promise<string> {
        try {

            const message = await this.apiProvider.refresh(type, this.userID, this.token)

            console.log({ message })

            return message

        } catch (e) {
            throw (e)
        }
    }

}

export default new DataProvider()