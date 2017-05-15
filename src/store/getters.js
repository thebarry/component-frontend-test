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
      const pre = typeof previous === 'number' ? previous : Number(previous.payment.value);
      return pre + Number(current.payment.value);
    }),
  };
}

export default {
  allPurchases,
  totalPurchases,
};
