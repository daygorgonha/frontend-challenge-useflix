import moment from 'moment'
import 'moment/locale/pt-br'

const install = function(Vue, options) {
    
    window.moment = moment
    window.moment().locale('pt-br')

    Vue.prototype.moment = window.moment
}

export default { install }