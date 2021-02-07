import { Vue as _Vue } from 'nuxt-property-decorator'
import DataProvider from '../services/data'

function DataProviderPlugin(Vue, options) {
    Vue.prototype.$dataProvider = DataProvider
}

_Vue.use(DataProviderPlugin)
