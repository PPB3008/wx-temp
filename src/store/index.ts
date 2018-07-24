import Vuex from 'vuex'
import state from './state';
import getters from './getters';
import mutations from './mutations';
import Vuexpersist from 'vuex-persist';
import actions from './actions' ;
import Vue from 'vue';

// const vuexPersist = new Vuexpersist<any, any>({
//     key: `WX_temp`,
//     strictMode: true,
//     storage: localStorage,
//   });
  

Vue.use(Vuex);
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: true,
});