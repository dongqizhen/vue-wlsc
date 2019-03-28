import Vuex from 'vuex'
import Vue from "vue";
import state from './state'
import actions from './actions'
import mutations from './mutations'
/* import createPersistedState from 'vuex-persistedstate'

const plugins = [createPersistedState()] */
Vue.use(Vuex);

console.log(state)

export default new Vuex.Store({
    state,
    actions,
    mutations,
    //plugins
})
