var express = require('express');
var router = express.Router();
var Posts = require('../../model/posts')


router.get('/',  function(req, res, next) {
    Posts.find(function(err, posts){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(posts);
    });
});

router.get('/test',  function(req, res, next) {
    Posts.find(function(err, posts){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(posts);
    });
});

router.get('/find/:name',  function(req, res, next) {
    console.log('name', req);
    Posts.find(function(err, posts){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(posts);
    });
});
router.post('/add',  function(req, res, next) {
    console.log('aa', req);
    var addPost = new Posts({
        title : req.body.title,
        contents: req.body.contents,
    });
    addPost.save(function (err) {
        if (err) {
            return next({code:500, msg:err});
        }
        res.send({code:200, msg:'Post added [ title: '+addPost.title+' ]'})
    })
});


module.exports = router;