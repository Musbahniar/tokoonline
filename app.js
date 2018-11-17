var express  = require('express');
var path  = require('path');

// Membuat Inisial App
var app  = express();

//View engine Setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//Setup Public
app.use(express.static(path.join(__dirname,'public')));

//Set Server
var port = 3000;
app.listen(port, function() {
    console.log('Server running on port 3000');
});

app.get('/', function(req,res){
    res.send('Ini adalah Index x');
});