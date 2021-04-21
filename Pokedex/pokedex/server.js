const express    = require('express');
const app        = express();
const port = 3000;
const methodOverride =require('method-override');
const pokemon = require('./models/pokemon.js');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));


app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { data: pokemon });
});


// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
});

app.post('/pokemon', (req, res) =>{
    pokemon.push(req.body)
    res.redirect('/pokemon');
})

// SHOW
app.get('/pokemon/:id', (req, res) => {
    // console.log(Pokemon[req.params.id], req.params.id)
res.render('show.ejs', { data: pokemon[Number(req.params.id)-1] });

});
console.log('here')
// EDIT 
app.get('/pokemon/:id/edit', (req, res) =>{
    // console.log(pokemon[req.params.id], req.params.id)
    res.render('edit.ejs', {
        data: pokemon[Number(req.params.id)-1],
        id: req.params.id
    })
})

app.put('/pokemon/:id', (req, res) =>{
    pokemon[Number(req.params.id)-1] = req.body
    res.redirect('/pokemon');
})


app.post('/pokemon', (req, res) => {
    data.push(req.body)
    res.redirect('/pokemon')
})
//DELETE
// app.delete('pokemon/:id', (req, res) => {
//     console.log('read')
//     pokemon.splice(req.params.id, 1); //remove the item from the array
// 	res.redirect('/pokemon');  //redirect back to index route
// });

// LISTEN
app.listen(port, () => {
    console.log('listening on port', port)
});