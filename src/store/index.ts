import Vue from 'vue'
import Vuex from 'vuex';
import { createStore, Module} from 'vuex-smart-module';
import lang from './lang';

Vue.use(Vuex);
const rootModule = new Module({
  modules: {
    lang,
  }
});


export default createStore(
  rootModule,
  {
    strict: process.env.NODE_ENV !== 'production'
  }
);
