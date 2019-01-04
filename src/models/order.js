export default {
  namespace: 'order',
  state: {
    items: [{
      key: 1,
      customer: {
        id: 1,
        name: 'foo',
        address: 'bj'
      },
      number: '20190104001',
      summary: 100,
      status: 'Received'
    }, {
      key: 2,
      customer: {
        id: 2,
        name: 'bar',
        address: 'sh'
      },
      number: '20190104002',
      summary: 200,
      status: 'Delivering'
    }]
  },
  reducers: {
    'list'(state) {},
  },
};
