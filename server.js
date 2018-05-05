const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//Heroku settings
const port = process.env.PORT || 3000;

//Middleware = Instrucción con un Callback que se ejecutara siempre
//sin importar que URL se solicite
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'gabriela'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})