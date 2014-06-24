define(function (require) {
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  Handlebars            = require('handlebars');

  var CatsIndexItemViewTemplate = require('text!src/tpl/cats/index-item.tpl');


  var CatsIndexItemView = Backbone.Marionette.ItemView.extend({
    events:{
      'click .icon-eye':'showEffect',
    },

    tagName: 'li ui-state-default',
    className: 'cats-index-item  col-md-4',

    template: Handlebars.compile(CatsIndexItemViewTemplate),


    showEffect: function() {
      $(".cats-index-item:nth-child(even)").animate({
          left: "-=100%"
        });
      $(".cats-index-item:nth-child(odd)").animate({
          left: "+=100%"
        });
      $('.boxgallery').css('visibility', 'visible');
      setTimeout(function(){
        $('.main-container').hide();
        Application.main.close();
      }, 1500);
      var elClass = '.'+ this.model.id ;
      var image = this.model.get('src');
      $('.1').children().children().children().attr('src','./img/'+image);
      $(elClass).children().children().children().attr('src','./img/img_00.jpg');
    }

  });
  return CatsIndexItemView;

});
