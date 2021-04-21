const express    = require('express');
const app        = express();
const Pokemon    = require('./models/Pokemon.js');
const port = 3000;
const methodOverride =require('method-override');
const pokemon = require('./models/Pokemon.js');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));


app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { data: Pokemon });
});
//
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
});
app.post('/pokemon', (req, res) =>{
    pokemon.push(req.body)
    res.redirect('/pokemon');
})
// SHOW
app.get('/pokemon/:id', (req, res) => {
    console.log(Pokemon[req.params.id], req.params.id)
res.render('show.ejs', { data: Pokemon[Number(req.params.id)-1] });

});



app.listen(port, () => {
    console.log('listening on port', port)
});