const express    = require('express');
const pokemon = require('./models/Pokemon.js');
const app        = express();
const Pokemon    = require('./models/Pokemon.js');
const port = 3000;


// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { data: Pokemon });
});

// SHOW
app.get('/pokemon/:id', (req, res) => {
    console.log(Pokemon[req.params.id], req.params.id)
res.render('show.ejs', { data: Pokemon[Number(req.params.id)-1] });

});

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
});

app.listen(port, () => {
    console.log('listening on port', port)
});