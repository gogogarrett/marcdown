import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MarcdownENV.locationType
});

Router.map(function() {
  this.resource('posts', function () {
    this.route("new");
  });
});

export default Router;
