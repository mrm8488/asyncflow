# asyncflow
Manage IO operations in Node.js using direct style (sync code like) without callbacks. It works with generators under the hood


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
