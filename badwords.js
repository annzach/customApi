var Filter = require('bad-words'),

function badwords(input) {
  let mystring = decodeURI(input);
  console.log(mystring);
  
  filter = new Filter();
  var goodword = fliter.clean(mystring);
  return `${goodword}`;
}

module.exports = badwords;
