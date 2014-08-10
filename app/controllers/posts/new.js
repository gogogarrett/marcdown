import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    savePost: function() {
      var post = this.store.createRecord('post', this.get("fields"));
      var that = this;

      post.save().then(function(post) {
        that.transitionToRoute('posts');
      });

      this.set("fields", {});
    }
  }
});
