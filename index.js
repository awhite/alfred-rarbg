'use strict';
const alfy = require('alfy');

const alfredRarbgClient = require('./alfredRarbg');

(async () => {
  try {
    alfy.output(await alfredRarbgClient.search(alfy.input))
  } catch (err) {
    console.error(err);
    throw err;
  }
})();
