const port =8080;
const http =require('http');
const math = require('./math');
const avatar =require('./avatar');
const counter = require('./counter');
const personage = require('./personage');
const magicball =require('./magicball');
const diction =require('./diction');
var Filter = require('bad-words');
var VocabFetcher = require("vocab-fetcher");
var spell = require('./spell')

let server = http.createServer((req,res) => {


console.log("request method:",req.method);
console.log("request url :",req.url);
console.log('\n');

let urlParts = req.url.match(/[^/]+/g) || [] ;

let path = urlParts[0]; //'math'
        switch(path) {
        case 'math': res.write(math(urlParts[1]));
                     res.end('\n');
                     break;

        case 'avatar':res.write(avatar(urlParts[1]));
                      res.end('\n');
                      break;

        case 'counter':res.write(counter(urlParts[1]));
                       res.end('\n');  
                       break;

        case 'personage': res.write(personage(urlParts[1]));
                          res.end('\n');
                          break;

        case 'spell' :res.write(spell(urlParts[1]));
                          res.end('\n');
                          break;

        case 'magicball': res.write(magicball(urlParts[1]))
                          res.end('\n');
                          break;

        case 'diction': var word = urlParts[1];
                        console.log(word);
                        var vocabFetcher = new VocabFetcher()
 
                        var meaning = vocabFetcher.getWord(word)
                        .then(function(wordObj){
                          
                          var description =wordObj.longDescription
                          res.write(description.toString());
                         res.end('\n');
                        })
                        
                         break;

                         

        case 'badwords':  var input = urlParts[1];
                          console.log(input);
                          let mystring = decodeURI(input);
                          console.log(mystring);
                          let filter = new Filter();
                          var goodword = filter.clean(mystring);
                          console.log(goodword);
                          //return `${goodword}`;
                          res.write(goodword);
                          res.end('\n');
                          break;

        default:   res.statusCode=404;
                   res.end('Not found\n'); 
                   break;

        }
});

server.listen(port,err => {
  console.log(err || `server listening on port ${port}`);
});
     