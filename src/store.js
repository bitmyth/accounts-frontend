import Vue from "vue"
import Vuex from 'vuex'
import LocalStore from "./localstorage"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: LocalStore.token,
        user: LocalStore.user,
    },
    modules: {},
    mutations: {
        login(state, userData) {
            state.user = userData
        },
        token(state, token) {
            state.token = token
        },
        logout(state) {
            state.user = null
            state.token = null
        }
    }
})
