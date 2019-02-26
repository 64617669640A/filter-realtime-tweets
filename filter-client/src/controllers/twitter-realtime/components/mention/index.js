var template = require('ak-template');
var Backbone = require('Backbone');

var TableTemplate = require('./index.tpl');

module.exports = Backbone.View.extend({
  'el': '.mentions',
  'template': template(TableTemplate),
  'initialize': function initialize () {
    this.listenTo(this.collection, 'add', this.render);
  },
  'render': function render () {
    this.$el.html(this.template(this.collection.toJSON()));

    return this;
  }
});

