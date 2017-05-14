export default [{
  id: 'abc3',
  payment: {
    code: '2a9577b188',
    status: false,
    mode: 'cash',
    value: '999,99',
    timestamp: Date.now(),
  },
  client: {
    name: 'Felipe Oliveira',
    email: 'felipe.o.silva18@gmail.com',
  },
}, {
  id: '5bb2',
  payment: {
    code: '5f2e3e5fb5',
    status: true,
    mode: 'credit-card',
    value: '457,75',
    timestamp: Date.now(),
  },
  client: {
    name: 'Tainá Nascimento',
    email: 'tainatnf@hotmail.com',
  },
}, {
  id: '48fc',
  payment: {
    code: '18fdbdc012',
    status: true,
    mode: 'debit-card',
    value: '999,99',
    timestamp: Date.now(),
  },
  client: {
    name: 'Gustavo Nascimento',
    email: 'gustavo@gmail.com',
  },
}];
