function counter(s){
let mystring = decodeURI(s);
console.log(mystring);
var word_arr = mystring.split(" ");
let word_count = word_arr.length;
var char_count = 0;
var obj = {};
console.log("word count", word_count);
console.log(word_arr);
      for(var i =0; i< mystring.length; i++) {
        if(mystring[i] !== ' ')
          char_count++;
      }
console.log("character count",char_count);
obj = {"word_count":`${word_count}`, "char_count":`${char_count}`};
console.log("obj in console",obj);
var s = JSON.stringify(obj);
return `obj is ${s}`;
}

module.exports = counter;

