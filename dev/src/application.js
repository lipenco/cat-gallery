define(function(require){
  var Backbone          = require('backbone');
  Backbone.Marionette   = require('backbone.marionette');
  var _                 = require('underscore');

  var Router            = require('src/router');
  // var Modernizer        = require('src/vendor/modernizr');

  var Application       = new Backbone.Marionette.Application();


  // in future, this could be improved with the use of layouts

  Application.addRegions({
    main:     '#main-container',
    gallery:  '#gallery-container',
    modal:    '#modal-container'
  });


  Application.on('initialize:before', function() {
    console.log('Application::initialize:before');
  });

  Application.on('initialize:after', function() {
    console.log('Application::initialize:after');
  });

  Application.on('start', function() {
    console.log('Application::start');
    Backbone.history.start({pushState:false, hashChange:true});
    window.Application = this;

    // this element does not belong to any view definition,
    // because it has to be loaded before anything else
    // that is why we are removing it just via jQuery

    $(this.modal.el).empty();
    this.router.catsIndex();
  });

  Application.on('start', function() {
    this.router.galleryIndex();
  });

  Application.addInitializer(function () {
    this.router = new Router(this);
  });


  return Application;
});
