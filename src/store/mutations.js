import Vue from 'vue';
import * as types from './mutation-types';

export default {
  [types.RECEIVER_ALL_PURCHASES](state, purchases) {
    Vue.set(state, 'purchases', purchases);
  },

  [types.NEW_FLOW](state, flow) {
    Vue.set(state, 'flow', flow);
  },

  [types.NEW_METHOD](state, method) {
    Vue.set(state, 'method', method);
  },

  /**
   * Sorts by payment status
   */

  [types.SORT_BY_STATUS_GROWING](state) {
    state.purchases.sort(purchase => !purchase.payment.status);
  },

  [types.SORT_BY_STATUS_DECREASING](state) {
    state.purchases.sort(purchase => purchase.payment.status);
  },

  /**
   * Sorts by payment value
   */

  [types.SORT_BY_PAYMENT_GROWING](state) {
    state.purchases.sort((previous, current) => {
      const p = Number(previous.payment.value);
      const c = Number(current.payment.value);
      return p > c;
    });
  },

  [types.SORT_BY_PAYMENT_DECREASING](state) {
    state.purchases.sort((previous, current) => {
      const p = Number(previous.payment.value);
      const c = Number(current.payment.value);
      return p < c;
    });
  },

  /**
   * Sort by payment date
   */

  [types.SORT_BY_DATE_GROWING](state) {
    state.purchases.sort((previous, current) => {
      const p = Date.parse(previous.payment.date);
      const c = Date.parse(current.payment.date);
      return p > c;
    });
  },

  [types.SORT_BY_DATE_DECREASING](state) {
    state.purchases.sort((previous, current) => {
      const p = Date.parse(previous.payment.date);
      const c = Date.parse(current.payment.date);
      return p < c;
    });
  },
};
