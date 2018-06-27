'use strict'

const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Generamos un citio publico
app.use( express.static(__dirname + '/public' ));


// Express HBS engine
// npm install hbs --save
// https://www.npmjs.com/package/hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// ------------------------------------------------------------------------
// Routes
app.get('/', (req, res) => {
    
    res.render('home',{
        nombre: 'Mairon José Cuello Martínez',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {
    
    res.render('about',{
        anio: new Date().getFullYear()
    });

});
// ------------------------------------------------------------------------

app.listen(port, ()=>{console.log(`Escuchando en el puerto ${port}`)});
    