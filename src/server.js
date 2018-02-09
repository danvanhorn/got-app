const express = require('express');
const path = require('path');

var app = express();

// this serves our bundled Vue app
app.use('/', express.static(path.join(__dirname, '..', 'dist')));

app.listen(6969);



