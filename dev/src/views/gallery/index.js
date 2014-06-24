define(function (require) {
  Marionette = require('backbone.marionette');

  var GalleryIndexItemView      = require('src/views/gallery/index-item');
  var CatsCollection            = require('src/collections/cats');
  var GalleryIndexViewTemplate  = require('text!src/tpl/gallery/index.tpl');
  // var Modernizer                 = require('src/vendor/modernizr');
  var BoxesFxs                   = require('src/vendor/boxesFx');
  var Handlebars                = require('handlebars');

  var GalleryIndexView = Marionette.CompositeView.extend({
    itemViewContainer: '.boxgallery',
    itemView: GalleryIndexItemView,
    template: Handlebars.compile(GalleryIndexViewTemplate),

    initialize:function() {
      this.collection = new CatsCollection();
      this.collection.fetch();
    },
    className: 'cats-gallery-page',

    onShow: function(collectionView, itemView) {
      var ell = this.$el.children();
      // new BoxesFx(ell);
      setTimeout(function(){  new BoxesFx( document.getElementById( 'boxgallery' ) )}, 100);



      // setTimeout(function(){new BoxesFx(ell)}, 3000);

    },

  });

  return GalleryIndexView;

});
