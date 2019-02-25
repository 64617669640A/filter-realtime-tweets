// Dependencies
var template = require('ak-template');
var Backbone = require('backbone');

require('./index.scss');
var TwitterRealTime = require('./index.tpl');
var Mention = require('./components/mention');

module.exports = Backbone.View.extend({
  'el': '#app',
  'events': {
    'click .add-one': 'addOne'
  },
  'addOne': function addOne (e) {
    e.preventDefault();
  },
  'template': template(TwitterRealTime),
  'render': function render () {
    this.$el.html(this.template());

    var mention = new Mention({
      'collection': this.collection
    });

    mention.render();

    return this;
  }
});
