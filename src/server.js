const express = require('express');
const path = require('path');

var app = express();

// this serves our bundled Vue app
app.use(express.static(path.join(__dirname, '..', 'build')));
// we can put some icons or stylesheets here
app.use(express.static(path.join(__dirname, 'assets')));
// this is just our index.html
app.use('/', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.send("got",200);
});

app.listen(6969);



