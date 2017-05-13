import Vue from 'vue';
import types from './mutation-types';

export default {
  [types.RECEIVER_ALL_PURCHASES](state, purchases) {
    Vue.set(state, 'purchases', purchases);
  },
};
