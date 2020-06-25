import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
let store
function buildStore () {
    store = new Vuex.Store({
        modules: {
        },
    })

    return store
}
buildStore()

export { store, buildStore }
export { vuexTypes } from './types'