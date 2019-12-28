const hbs = require("hbs");
const express = require("express");

var app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get('/index', (req, res) => {
    res.render('index.hbs', {
        title: 'Mithra'
    });
});

app.listen(3000);