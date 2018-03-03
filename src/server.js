const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
const Dal = require('./dal/dal');

// password to the db enter it as a cmd line arg
const password = process.argv[4];


// object that can query our database and return results
const dal = new Dal(password);
const { character, house, specialty, alliance } = dal.tables;

const app = express();

// this serves our bundled Vue app
app.use(express.static(path.join(__dirname, '..', 'dist')));

const port = 6969;
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});



