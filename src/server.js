const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

var app = express();

// this serves our bundled Vue app
app.use(express.static(path.join(__dirname, '..', 'dist')));


app.use(history({
  disableDotRule: true,
  verbose: true
}));

app.use(express.static(path.join(__dirname, '..', 'dist')));

const port = 6969;
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});



