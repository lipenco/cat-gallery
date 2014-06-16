define(function (require) {
  Marionette = require('backbone.marionette');

  var CatsIndexItemView      = require('src/views/cats/index-item');
  var CatsIndexEmptyView     = require('src/views/cats/index-empty');
  var CatsCollection         = require('src/collections/cats');
  var CatsIndexViewTemplate  = require('text!src/tpl/cats/index.tpl');
  var JqueryUi               = require('src/vendor/jquery/dist/jquery-ui');
  var Handlebars             = require('handlebars');

  var CatsIndexView = Marionette.CompositeView.extend({
    itemViewContainer: '.cats-index-list',
    itemView: CatsIndexItemView,
    emptyView: CatsIndexEmptyView,
    template: Handlebars.compile(CatsIndexViewTemplate),

    initialize:function() {
      this.collection = new CatsCollection();
      this.collection.fetch();
    },
    className: 'cats-index-page',

    onShow: function(collectionView, itemView) {
      console.log(this.$el.find("ul"));
      this.$el.find("ul").sortable();
    },


    appendHtml: function(collectionView, itemView){
      collectionView.$el.find(this.itemViewContainer).prepend(itemView.el);
    }
  });

  return CatsIndexView;

});
