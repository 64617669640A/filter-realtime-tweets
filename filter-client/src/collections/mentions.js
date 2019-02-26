// Dependencies
var Backbone = require('backbone');
var io = require('socket.io-client');

// Models
var Mention = require('../models/mentions.js');

// Collection
var Mentions = Backbone.Collection.extend({
  'model': Mention,
  'initialize': function initialize () {
    var socket = io.connect('http://localhost:3002');

    socket.on('message', function receivedTweet (tweet) {
      console.log(tweet);
      this.addMention(tweet);
    }.bind(this));
  },
  'addMention': function addMention (mention) {
    this.add(mention);
  }
});

module.exports = new Mentions();
