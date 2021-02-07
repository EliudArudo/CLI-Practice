import { DataProvider } from './services/data'

declare module 'vue/types/vue' {
    interface Vue {
        $dataProvider: DataProvider
    }
}