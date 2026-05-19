const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,"/public/")));


app.set("view","./src/view");
app.set("view engine","ejs")

app.get("/" ,(req,res) =>{

    res.render('index',{username: 'Ang55+',customers: ["Kitti112","Kittikorn","Kitty"]});
})


app.listen(port, ()=>{
    debug("Listening on port" + chalk.red(" : "+port));
})