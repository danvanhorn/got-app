const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
const DbConnection = require('./dal/dbconnection');

const password = process.argv[4];

const conn = new DbConnection(
  'classmysql.engr.oregonstate.edu',
  'cs340_vanhornd',
  password,
  'cs340_vanhornd'
).getConnection();
const app = express();

// this serves our bundled Vue app
app.use(express.static(path.join(__dirname, '..', 'dist')));

const port = 6969;
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});



