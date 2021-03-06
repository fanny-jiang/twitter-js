const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  console.log(tweets)
  res.render( 'index', { tweets: tweets } );
});

router.get('/special', function (req, res) {
    res.send('You have got puppies!')
})

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});

module.exports = router;
