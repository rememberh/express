var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/list",function(req,res){
    res.json({goodsname:"20yuan"})
})
module.exports = router;