var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var io = require('socket.io')(3002);

var client = new Twitter({
  consumer_key: 'tZoYtfCixrzcTAnXu6Hnw208L',
  consumer_secret: 'YRDmglV8EY5ThqKrBh9j8o80eoeKSmOc0pxx9jqL857SZ0pT7y',
  access_token_key: '3375499031-DIHkyKgk1yBnzr4ejfoZmSIai7oyU7CpS6dW9Jn',
  access_token_secret: 'MWVd9OLoSc1qXPT6lM19ZbNu4UWvYzNC41ku3zqzER552'
});

var formatter = function(tweet) {
  return {
    'createdAt': tweet.created_at,
    'id': tweet.id_str,
    'text': tweet.text,
    'user': {
      'name': tweet.user.name,
      'avatar': tweet.user.profile_image_url
    },
    'replyCount': tweet.reply_count,
    'reteweetCount': tweet.retweet_count,
    'favoriteCount': tweet.favorite_count,
    'coordinates': tweet.coordinates
  }
}

var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(tweet) {
  io.sockets.on('connection', function (socket) {
    if (tweet) {
      console.log(formatter(tweet))
      socket.emit('message', formatter(tweet));
    }
  })
});

stream.on('error', function(error) {
  throw error;
});
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
