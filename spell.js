var SpellChecker = require('spellchecker');

          function spell(input) {
            console.log(input);
          if(SpellChecker.isMisspelled(input)) {
            console.log("Misspelled");
        //return `${misspelled}`; }
        
            var suggest = SpellChecker.getCorrectionsForMisspelling(input);
            return `${suggest}`;
        }
        else{
          return `Word is spelled correctly`;
        }
    }


module.exports=spell;