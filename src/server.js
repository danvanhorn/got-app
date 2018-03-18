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
const { character, house, specialty, alliance, char_spec, ally_char, ally_house } = dal.tables;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/get/:table', async (req, res) => {
  const table = req.params.table;
  if (dal.validateTable(table)) {
    try{
      const result = await dal.select(table);
      res.json(result);
    }catch (err){
      res.sendStatus(500);
    }
  }
})

app.get('/api/find_char/:category/:choice', (req, res) => {
  const {category, choice} = req.params;
  dal.findChar(category, choice)
    .then(result => res.json(result))
    .catch(err => res.sendStatus(500))
})

app.get('/api/get_char/:column', (req, res) => {
    const column = req.params.column;
    dal.getFromCharacter(column)
      .then(result => res.json(result))
      .catch(err => res.sendStatus(500))
})

app.post('/api/add/:table', (req, res) => {
  const table = req.params.table;
  if (dal.validateTable(table)) {{
      dal.insert(table, req.body)
        .then(result => res.send(result))
        .catch(err => res.sendStatus(500))
    }
  } else {
    res.sendStatus(500);
  }
})

app.post('/api/rel/:table', (req, res) => {
  const table = req.params.table;
  if (dal.validateTable(table)) {
    console.log(req.body);
    if (table === char_spec){
      dal.insertSpecialtyRelationship(req.body)
        .then(result => res.send(result))
        .catch(err => res.sendStatus(500))
    }
    else if (table === ally_char){
      dal.insertAllianceCharacterRelationship(req.body)
        .then(result => res.send(result))
        .catch(err => res.sendStatus(500))
    }
    else if (table === ally_house){
      dal.insertAllianceHouseRelationship(req.body)
        .then(result => res.send(result))
        .catch(err => res.sendStatus(500))
    }
  }
})

app.post('/api/delete/got_character', (req, res) => {
  dal.deleteCharacter(req.body)
    .then(result => res.send(result))
    .catch(err => console.log(err));
})

app.post('/api/update/got_house', (req, res) => {
  dal.updateHouse(req.body)
  .then(result => res.send(result))
  .catch(err => res.sendStatus(500))
})

app.get('/api/view/:table', (req, res) => {
  const table = req.params.table;
  if (dal.validateTable(table)) {
    if (table === house) {
      dal.getHouseViewData()
        .then(result => res.json(result))
        .catch(err => res.sendStatus(500))
    } else if(table == alliance) {
      dal.getAllyViewData()
      .then(result => res.json(result))
      .catch(err => res.sendStatus(500))
    }
    else if (table === specialty) {
      dal.getSpecViewData()
        .then(result => res.json(result))
        .catch(err => res.sendStatus(500))
    }
  } else {
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
