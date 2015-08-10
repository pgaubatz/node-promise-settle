# es6-promise-settle
[![npm version](https://badge.fury.io/js/es6-promise-settle.svg)](http://badge.fury.io/js/es6-promise-settle)
[![Build Status](https://travis-ci.org/pgaubatz/node-es6-promise-settle.svg?branch=master)](https://travis-ci.org/pgaubatz/node-es6-promise-settle)
[![Coverage Status](https://coveralls.io/repos/pgaubatz/node-es6-promise-settle/badge.svg)](https://coveralls.io/r/pgaubatz/node-es6-promise-settle)
[![Dependency Status](https://david-dm.org/pgaubatz/node-es6-promise-settle.svg)](https://david-dm.org/pgaubatz/node-es6-promise-settle)

Promise.settle() for ES6-Promise.  

## Installation

    npm install --save es6-promise-settle

## Usage
```javascript
var promiseSettle = require('es6-promise-settle');

promiseSettle([true, Promise.resolve(3), Promise.reject(new Error('error'))])
  .then(function (results) {
    results.forEach(function (result) {
      if (result.isFulfilled()) {
        console.log('Promise is fulfilled', result.value());
      } else {
        console.log('Promise is rejected', result.reason());
      }
    })
  });
```
