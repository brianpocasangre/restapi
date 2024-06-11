import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const API_URL = 'https://secrets-api.appbrewery.com';

app.get('/', (req, res) => {
  res.render('index.ejs', {
    content: 'waiting for data!',
  });
});

app.listen(port, () => {
  console.log(`Server is listening on Port:${port}, http://localhost:${port}`);
});
