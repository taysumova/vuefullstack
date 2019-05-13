import Api from '@services/Api'

export default {
    reqister (credentials) {
        return Api().post('register', credentials)
    }
}