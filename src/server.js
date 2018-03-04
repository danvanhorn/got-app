const express = require('express');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const path = require('path');
const Dal = require('./dal/dal');

// password to the db enter it as a cmd line arg
const password = process.argv[4];

// object that can query our database and return results
const dal = new Dal(password);
const { character, house, specialty, alliance } = dal.tables;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/get/:table', (req, res, next) => {
  const table = req.params.table;
  if(dal.validateTable(table)){
    dal.selectAll(table)
    .then(result => res.json(result))
    .catch(err => console.log(err))
  }else{
    res.send(500);
  }

})

// this serves our bundled Vue app
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(history());
app.use(express.static(path.join(__dirname, '..', 'dist')));

const port = 6969;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});



