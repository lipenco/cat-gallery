define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  Handlebars            = require('handlebars');

  var CatsIndexItemViewTemplate = require('text!src/tpl/cats/index-item.tpl');


  var CatsIndexItemView = Backbone.Marionette.ItemView.extend({
    events:{
      'mouseenter .cat-image':'hoverEffect',
    },

    // onShow: function(view){
    //   this.$el.data('row', "1");
    //   this.$el.data('col', "1");
    //   this.$el.data('sizex', "2");
    //   this.$el.data('sizey', "2");
    // },


    tagName: 'li',
    className: 'cats-index-item  col-md-4',
    template: Handlebars.compile(CatsIndexItemViewTemplate),

    hoverEffect: function() {

      this.$el.children().find(".cat-image").animate({

      }, 500, function() {

      });
    }

  });
  return CatsIndexItemView;

});
