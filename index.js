'use strict';
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');


app.get('/', function(req, res)
{
    var num1 = req.query.entrada1;
    var num2 = req.query.entrada2;
    var num3 = req.query.entrada3;

    var resultado = parseInt(num1) * 4500000 + parseInt(num2) * 1200000 + parseInt(num3) * 6300000;

    if(isNaN(num1)||isNaN(num2)||isNaN(num3)){
        resultado = 0;
    }

    res.render('template', {total: resultado});
});

app.listen(3000);