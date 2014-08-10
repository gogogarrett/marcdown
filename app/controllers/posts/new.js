import Ember from 'ember';

export default Ember.Controller.extend({

  resetForm: function() {
    this.set("fields", {});
    this.set("formErrors", {});
  },

  actions: {
    save: function() {
      var _that = this;
      var post = this.store.createRecord("post", this.get("fields"));

      post.save().then(function(){
        _that.resetForm();
        _that.transitionToRoute("posts.index");
      }, function(post) {
        post.deleteRecord();

        _that.set("formErrors", {});
        for (var key in post.errors) {
          _that.set("formErrors." + key, true);
        }
      });
    },

    cancel: function() {
      this.resetForm();
      this.transitionToRoute("posts.index");
    }
  }
});
