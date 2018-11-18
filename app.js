var express  = require('express');
var path  = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');

// Membuat Inisial App
var app  = express();

//View engine Setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//Setup Public
app.use(express.static(path.join(__dirname,'public')));

// Connect to db
mongoose.connect(config.database);
var db = mongoose.connection;
// mongoose.connect('mongodb://localhost/toko-onlinesalah');
db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open',function(){
    console.log('Connection Open');
})


//Set Server
var port = 3000;
app.listen(port, function() {
    console.log('Server running on port 3000');
});

app.get('/', function(req,res){
    res.send('Ini adalah Index');
});