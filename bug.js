const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      res.send('Success!');
    } else {
      // Throwing an error here will cause the request to fail,
      // but only after the response has already been started.
      throw new Error('Something went wrong!');
    }
  }, 100);
});
app.listen(3000, () => console.log('Server listening on port 3000'));