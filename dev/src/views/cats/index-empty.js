define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  Handlebars            = require('handlebars');

  var CatsIndexEmptyViewTemplate = require('text!src/tpl/cats/index-empty.tpl');


  var CatsIndexEmptyView = Backbone.Marionette.ItemView.extend({
    tagName: 'li',
    className: 'cats-index-empty',
    template: Handlebars.compile(CatsIndexEmptyViewTemplate)
  });

  return CatsIndexEmptyView;

});
