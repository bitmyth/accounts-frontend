import axios from "axios"
// import store from "./store"

export default class LocalStore {
    static get userStorageKey() {
        return 'user'
    }

    static get tokenStorageKey() {
        return 'token'
    }

    static get admin() {
        return this.user && this.user.roles && this.user.roles.includes('admin')
    }

    static get roles() {
        return this.user ? this.user.roles : []
    }

    static get user() {
        if (this.token) {
            return JSON.parse(localStorage.getItem(this.userStorageKey))
        }
        return false
    }

    static set user(user) {
        if (user) {
            // user.roles = user.roles.map((role) => { return role.name })
            localStorage.setItem(this.userStorageKey, JSON.stringify(user))
        } else {
            localStorage.removeItem(this.userStorageKey)
        }
    }

    static get guest() {
        return !this.user
    }

    static get token() {
        const token = localStorage.getItem(this.tokenStorageKey)
        return token
    }

    static set token(token) {
        if (token) {
            localStorage.setItem(this.tokenStorageKey, token)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + LocalStore.token
        } else {
            delete axios.defaults.headers.common['Authorization']
            localStorage.removeItem(this.tokenStorageKey)
        }
    }

    // store is instance of vuex
    static recover(store) {
        if (this.token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + LocalStore.token
            store.commit("token", this.token);
        }
        if (this.user) {
            store.commit("login", this.user);
        }
    }

    /**
     * clear token and user
     */
    static clear() {
        this.token = null
        this.user = null
    }

    static validateToken(token) {
        return (token &&
            token.access_token &&
            token.expire_at > (new Date()).getTime() / 1000)
    }
}
