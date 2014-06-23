define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  Handlebars            = require('handlebars');

  var CatsIndexItemViewTemplate = require('text!src/tpl/cats/index-item.tpl');


  var CatsIndexItemView = Backbone.Marionette.ItemView.extend({
    events:{
      'click .cat-image':'showEffect',
    },

    tagName: 'li',
    className: 'cats-index-item  col-md-4',
    template: Handlebars.compile(CatsIndexItemViewTemplate),

    showEffect: function() {
      $(".cats-index-item:nth-child(even)").animate({
          left: "-=100%"
        });
      $(".cats-index-item:nth-child(odd)").animate({
          left: "+=100%"
        });

      Application.trigger("gallery:start");

    }

  });
  return CatsIndexItemView;

});
