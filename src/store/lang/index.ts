import { Module, registerModule } from 'vuex-smart-module'
import store from '../index';
import LangState from './state';
import LangGetters from './getters';
import LangMutations from './mutations';
import LangActions from './actions';

const LangStore = new Module({
  state: LangState,
  getters: LangGetters,
  mutations: LangMutations,
  actions: LangActions,
});

export {
  LangState,
  LangGetters,
  LangMutations,
  LangActions,
};

export default LangStore;
