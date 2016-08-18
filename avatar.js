const md5 = require('md5');
function avatar(s) {


var  email = s;
var hash =md5(email);
return `http://www.gravatar.com/avatar/${hash}`;

}

module.exports = avatar;