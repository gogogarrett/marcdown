import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MarcdownENV.locationType
});

Router.map(function() {
  this.resource('posts', function () {
    this.route("new");
  });

  this.resource('post', { path: '/posts/:post_id' }, function () {
    this.route('edit');
  });

});

export default Router;
