define(function (require) {
  var Backbone = require('backbone');
  Backbone.Marionette = require('backbone.marionette');

  var CatsIndexView = require('src/views/cats/index');
  var GalleryIndexView = require('src/views/gallery/index');


  var Router = Backbone.Router.extend({

    initialize:function(app) {
      this.application = app;
      console.log('Router::initialize()');
    },
    routes:{
      '!/':'catsIndex',
      '*anything':'fourOhFour'
    },

    fourOhFour:function() {
      console.log('Router::404');
      var self = this;
      _.defer(function() {
        self.navigate('!/');
      });
    },

    catsIndex:function(){
      var catsIndexView = new CatsIndexView();
      this.application.main.show(catsIndexView);
    },

    galleryIndex:function(){
      var galleryIndexView = new GalleryIndexView();
      this.application.main.show(galleryIndexView);
    },

  });


  return Router;

});
