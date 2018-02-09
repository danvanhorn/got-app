const express = require('express');
const path = require('path');

var app = express();

// this serves our bundled Vue app
app.use('/', express.static(path.join(__dirname, '..', 'dist')));


app.get('/', (req, res) => {
    res.send("got",200);
});

app.listen(6969);



