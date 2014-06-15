define(function (require) {
  var Backbone = require('backbone');
  Store = require('Backbone.localStorage');
  var CatModel = Backbone.Model.extend({

    defaults: function(){
        return {
          firstName:  'John',
          lastName:   'Doe',
          created: (new Date()).getTime()
        }
    },
    toJSON:function() {
      var attrs = _.clone(this.attributes);
      attrs.fullName = attrs.firstName + " " + attrs.lastName;
      attrs.initials = attrs.firstName.charAt(0) + attrs.lastName.charAt(0);
      return attrs;
    },
  });


  return CatModel;
});
