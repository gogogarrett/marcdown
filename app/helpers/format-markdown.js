export default Ember.Handlebars.makeBoundHelper(function(input) {
  if (typeof input == 'undefined')  return;
  var showdown = new Showdown.converter();
  return new Handlebars.SafeString(showdown.makeHtml(input));
});
