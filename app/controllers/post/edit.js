import Ember from 'ember';

export default Ember.Controller.extend({

  resetForm: function() {
    this.set("formErrors", {});
  },

  actions: {
    save: function() {
      var _that = this;

      this.get('model').save().then(function(){
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
