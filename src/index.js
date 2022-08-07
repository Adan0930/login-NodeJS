const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {engine} = require('express-handlebars')

//Initializations
const app = express();


//Setings(configuraciones)
const PORT = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));//Decir en donde esta la carpeta views
app.engine('.hbs', engine ({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),//Layouts esta dentro de la carpeta views
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs', //Que nombres tendran nuestros archivos de hbs
    helpers: require('./lib/handlebars') //Procesar funciones por aparte
}));//Configurar el motor de hbs

app.set('view engine', '.hbs')//Usar el motor de hbs


//Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))//Aceptar los datos del formulario que envien los usuarios Parametro= aceptar strings
app.use(express.json())//Enviar y recibir json


//Global variables
app.use((req,res,next)=>{
    next();
}) //Variables que se acceden desde cualquier parte

//Routes
app.use(require('./routes/index'));
app.use( '/links', require('./routes/links'));//Le preseda un prefijo 
app.use(require('./routes/auntetication'));


//Public
app.use(express.static(path.join(__dirname , 'public')))//Decirle en donde esta la carpeta public
//Starting the server 
app.listen(PORT, ()=>
    console.log(`Server on port ${PORT}`)
)