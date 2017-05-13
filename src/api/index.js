import purchases from './mock-data';

const LATENCY = 100;

function getAllPurchases() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!purchases) {
        reject({ err: 'purchases not loaded' });
      }

      resolve(purchases);
    }, LATENCY);
  });
}

export default {
  getAllPurchases,
};
