const moment = require('moment');

function personage(s) {
//return [] if no match
//let urlParts =req.url.split()

let birth_date = s
let birth_date_format =moment(birth_date,'MM_DD-YYYY');
let age_diff = birth_date_format.diff(moment());
let durationStr =moment.duration(age_diff).humanize(true);


 //'square'

console.log("hello monkey")
return `${durationStr}`;
}

module.exports = personage;