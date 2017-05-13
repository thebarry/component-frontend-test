import api from '../api';
import types from './mutation-types';

function getAllPurchases({ commit }) {
  return api.getAllPurchases()
    .then((purchases) => {
      commit(types.RECEIVER_ALL_PURCHASES, purchases);
    })
    .catch((err) => {
      throw err.message;
      // console.error(err.message);
    });
}

export default {
  getAllPurchases,
};
