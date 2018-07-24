import { MutationTree } from 'vuex';
// import state from './state';
const mutations: MutationTree<any> = {
    setState(state,{ key, value }): void {
        state[key] = value;
    }   
}

export default mutations;