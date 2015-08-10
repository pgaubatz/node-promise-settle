'use strict';

require('es6-promise').polyfill();

module.exports = settle;

function settle(promises) {
  return Promise.resolve()
    .then(function () {
      return promises;
    })
    .then(function (promises) {
      if (!Array.isArray(promises)) throw new TypeError('Expected an array of Promises');

      var promiseResults = promises.map(function (promise) {
        return Promise.resolve()
          .then(function () {
            return promise;
          })
          .then(function (result) {
            return promiseResult(result);
          })
          .catch(function (err) {
            return promiseResult(null, err);
          });
      });

      return Promise.all(promiseResults);
    });
}

function promiseResult(result, err) {
  var isFulfilled = (typeof err === 'undefined');
  var value = isFulfilled
    ? returns.bind(result)
    : throws.bind(new Error('Promise is rejected'));

  var isRejected = !isFulfilled;
  var reason = isRejected
    ? returns.bind(err)
    : throws.bind(new Error('Promise is fulfilled'));

  return {
    isFulfilled: returns.bind(isFulfilled),
    isRejected: returns.bind(isRejected),
    value: value,
    reason: reason
  };
}

function returns() {
  return this;
}

function throws() {
  throw this;
}
