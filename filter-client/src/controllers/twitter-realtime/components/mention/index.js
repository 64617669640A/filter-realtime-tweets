var template = require('ak-template');
var Backbone = require('Backbone');

var TableTemplate = require('./index.tpl');

module.exports = Backbone.View.extend({
  'el': '.mentions',
  'template': template(TableTemplate),
  'render': function render () {
    this.$el.html(this.template(this.collection.toJSON()));

    return this;
  }
});

