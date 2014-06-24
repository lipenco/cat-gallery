define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  Handlebars            = require('handlebars');

  var GalleryIndexItemViewTemplate = require('text!src/tpl/gallery/index-item.tpl');


  var GalleryIndexItemView = Backbone.Marionette.ItemView.extend({
    events:{

    },

    tagName: 'div',
    className: 'panel',
    template: Handlebars.compile(GalleryIndexItemViewTemplate),

    onShow: function() {
      var ellClass = this.model.id
      this.$el.addClass(ellClass)
    }


  });
  return GalleryIndexItemView;

});
