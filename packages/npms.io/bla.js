//@ts-check

const {NpmsIO} = require('./');

new NpmsIO().api.search
  .suggestions('swaxios')
  .then(data => console.log(data))
  .catch(console.error);
