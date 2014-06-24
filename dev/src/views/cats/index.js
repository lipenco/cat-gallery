define(function (require) {
  Marionette = require('backbone.marionette');

  var CatsIndexItemView      = require('src/views/cats/index-item');
  var CatsCollection         = require('src/collections/cats');
  var CatsIndexViewTemplate  = require('text!src/tpl/cats/index.tpl');
  var JqueryUi               = require('src/vendor/jquery/dist/jquery-ui');
  var Handlebars             = require('handlebars');

  var CatsIndexView = Marionette.CompositeView.extend({
    itemViewContainer: '.cats-index-list',
    itemView: CatsIndexItemView,
    template: Handlebars.compile(CatsIndexViewTemplate),

    initialize:function() {
      this.collection = new CatsCollection();
      this.collection.fetch();
    },
    className: 'cats-index-page',

    onShow: function(collectionView, itemView) {
       this.$el.find("ul").sortable();
    },

  });

  return CatsIndexView;

});
