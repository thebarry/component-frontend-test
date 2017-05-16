/* eslint-disable arrow-body-style */

function allPurchases(state) {
  return state.purchases;
}

function totalPurchases(state) {
  if (!state.purchases) {
    return false;
  }

  return {
    number: state.purchases.length,
    total: state.purchases.reduce((previous, current) => {
      const pre = typeof previous === 'number' ? previous : parseInt(previous.payment.value, 10);
      return pre + parseInt(current.payment.value, 10);
    }),
  };
}

export default {
  allPurchases,
  totalPurchases,
};
