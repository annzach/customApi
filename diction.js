
function diction(input) {
var VocabFetcher = require("vocab-fetcher")
var vocabFetcher = new VocabFetcher()
 
var meaning = vocabFetcher.getWord(input)
.then(function(wordObj){
  return `${meaning}`;
})
console.log(meaning)
 }


module.exports=diction;