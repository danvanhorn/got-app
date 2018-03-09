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

app.get('/api/get/:table', (req, res) => {
  const table = req.params.table;
  if (dal.validateTable(table)) {
    dal.select(table)
      .then(result => res.json(result))
      .catch(err => res.sendStatus(500))
  }
})

app.post('/api/add/:table', (req, res) => {
  const table = req.params.table;
  if (dal.validateTable(table)) {
    if (table === house) {
      dal.insert(table, req.body)
        .then(result => res.send(result))
        .catch(err => res.sendStatus(500))
    } else if (table === character) {
      dal.insert(table, req.body)
        .then(result => res.send(result))
        .catch(err => res.sendStatus(500))
    } else if (table === specialty) {
      dal.insert(table, req.body)
        .then(result => res.send(result))
        .catch(err => res.sendStatus(500))
    } else if (table === alliance){
      // add alliance
    }
  }
})

app.post('/api/add-rel/:table', (res, req) => {

})

app.get('/api/view/:table', (req, res) => {
  const table = req.params.table;
  if (dal.validateTable(table)) {
    if (table === house) {
      dal.getHouseViewData()
        .then(result => res.json(result))
        .catch(err => res.sendStatus(500))
    } else if (table === specialty) {
      dal.getSpecViewData()
        .then(result => res.json(result))
        .catch(err => res.sendStatus(500))
    }
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



