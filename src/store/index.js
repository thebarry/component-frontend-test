import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import * as actions from './actions';
import getters from './getters';
import plugins from './plugins';

Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  plugins,
});
