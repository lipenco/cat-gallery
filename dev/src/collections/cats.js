define(function (require) {
  var Backbone = require('backbone');
  var CatModel = require('src/models/cat');
  // Store = require('Backbone.localStorage');
  var CatsCollection = Backbone.Collection.extend({
    url:'/api/images.json',
    model: CatModel,
    initialize:function(){
      
    }
  });

  return CatsCollection;
});
