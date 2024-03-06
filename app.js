// start server
const mysql=require("mysql");
const path=require("path");
const exphbs=require("express-handlebars");
const express = require("express");
const dotenv=require("dotenv");
const body=require("body-parser");
const { required } = require("nodemon/lib/config");
dotenv.config({path:'./.env'});
const app = express();
const db =mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});
const publichDirectory=path.join(__dirname,'./public');
app.use(express.static(publichDirectory));
app.use(express.urlencoded({extended:false}));
// make sure rhe values we are taking from the form is json
app.use(express.json());

// ... other app configuration
const handlebars = exphbs.engine({ /* options */ });



app.set('view engine','hbs');
db.connect((error)=>{
    if(error){
        console.log("error");
    }
    else{
    console.log('Mysql connected....');
    }

})


app.use(express.static('public'));


// define route
app.use('/',require('./route/pages'));
app.use('/auth' ,require('./route/auth'));
app.use('/mess', require('./route/message'))
// Route for check team interface

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server is on port 3000");
});
  