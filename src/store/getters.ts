import { GetterTree } from 'vuex';
const actions: GetterTree<any, any> = {
    stateGetter(state): object {
        return state;
    }
}

export default actions;