define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  Handlebars            = require('handlebars');

  var CatsIndexItemViewTemplate = require('text!src/tpl/cats/index-item.tpl');


  var CatsIndexItemView = Backbone.Marionette.ItemView.extend({
    tagName: 'li',
    className: 'cats-index-item',
    template: Handlebars.compile(CatsIndexItemViewTemplate),

  });
  return CatsIndexItemView;

});
