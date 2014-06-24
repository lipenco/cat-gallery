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

    // render: function(){
    //       this.$el.html(this.template(this.model.attributes));
    //       this.$el.hide();
    //   },
    // onShow: function(){
    //     this.$el.slideDown(800);
    // }

    showEffect: function() {
      $(".cats-index-item:nth-child(even)").animate({
          left: "-=100%"
        });
      $(".cats-index-item:nth-child(odd)").animate({
          left: "+=100%"
        });
      $('.boxgallery').css('visibility', 'visible');
      setTimeout(function(){$('.main-container').addClass('gallery-mode');}, 1000);

        // Application.trigger("gallery:start")
        // setTimeout(function(){Application.trigger("gallery:start")}, 1000);



    }

  });
  return CatsIndexItemView;

});
