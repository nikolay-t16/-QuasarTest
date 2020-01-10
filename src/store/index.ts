import Vue from 'vue';
import Vuex from 'vuex';
import product from './product';
import rubric from './rubric';
import catalog from './catalog';
import basket from './basket';

// import example from './module-example'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.DEV === 'true'
});
