import api from '../api';
import * as types from './mutation-types';

export function getAllPurchases({ commit }) {
  return api.getAllPurchases()
    .then((purchases) => {
      commit(types.RECEIVER_ALL_PURCHASES, purchases);
    })
    .catch((err) => {
      throw err.message;
      // console.error(err.message);
    });
}

export function sort({ commit, state }, method) {
  if (state.method !== method) {
    commit(types.NEW_FLOW, 'growing');
    commit(types.NEW_METHOD, method);
    commit(types[`${method}_GROWING`]);
  } else if (state.flow === 'decreasing') {
    commit(types[`${method}_GROWING`]);
    commit(types.NEW_FLOW, 'growing');
  } else {
    commit(types[`${method}_DECREASING`]);
    commit(types.NEW_FLOW, 'decreasing');
  }
}
