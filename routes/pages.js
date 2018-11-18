var express = require('express');
var router = express.Router();

// export
module.exports = router;

// Home / index
router.get('/', function(req,res){
    // res.send('Ini adalah Index');
    res.render('index', {
        title: 'Ganti Judul'
    })
});