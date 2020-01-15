# asyncflow

[![Greenkeeper badge](https://badges.greenkeeper.io/mrm8488/asyncflow.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/mrm8488/asyncflow.svg?branch=master)](https://travis-ci.org/mrm8488/asyncflow)
[![Coverage Status](https://coveralls.io/repos/github/mrm8448/asyncflow/badge.svg?branch=master)](https://coveralls.io/github/mrm8448/asyncflow?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/mrm8488/asyncflow/badge.svg)](https://snyk.io/test/github/mrm8488/asyncflow)

Manage IO operations in Node.js using direct style (sync code like) without callbacks. It works with generators under the hood.

Implementation based on the proposed solution in the great book [Node.js Design Patterns](https://www.nodejsdesignpatterns.com/)

## How to install:
`npm i asyncflow-gen`


## How to use it:

```js

const asyncFlow = require('asyncflow-gen');

asyncFlow(function* (callback) {

  yield fs.writeFile('./test/testFile', 'Hey there!', callback);
  
  const data = yield fs.readFile('./test/testFile', 'utf8', callback);
            
  console.log('data is: ', data);

  yield fs.unlink('./test/testFile', callback);
            
  console.log('That is all, folks! Where are the callbacks??');
  
});

```

## What we are avoiding:

```js

fs.writeFile('./test/testFile', 'Hey there!', err => {

  if (err) {
    handleErrorFunction(err);
  }
  
  fs.readFile('./test/testFile', 'utf8', (err, data) => {
  
    if (err) {
      handleErrorFunction(err);
    }
    
    console.log('data is: ', data);
    
    fs.unlink('./test/testFile', err => {
    
      if (err) {
        handleErrorFunction(err);
      }
      
      console.log('That is all, folks! Yes, I do not like this callback cascade.');
      
    });
  
  });

});

```
