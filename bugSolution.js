const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const domain = require('domain').create();

  domain.on('error', (err) => {
    console.error('Error handled in domain:', err);
    res.status(500).send('Internal Server Error');
  });

  domain.run(() => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Success!');
      } else {
        throw new Error('Something went wrong!');
      }
    }, 100);
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));