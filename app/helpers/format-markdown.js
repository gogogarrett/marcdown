export default Ember.Handlebars.makeBoundHelper(function(input) {
    if(input && input.length > 0) {
      var showdown = new Showdown.converter();
      return new Handlebars.SafeString(showdown.makeHtml(input));
    }
});
