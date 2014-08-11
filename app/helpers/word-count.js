import counter from "../helpers/word-counter";

export default = Ember.Handlebars.makeBoundHelper(function (markdown) {
  if (/^\s*$/.test(markdown)) {
    return '0 words';
  }

  var count = counter(markdown || '');
  return count + (count === 1 ? ' word' : ' words');
});

