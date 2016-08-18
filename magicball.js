function magicball(s){
  var arr = ['yes','maybe','no'];
  var random_text = arr[Math.floor(Math.random() * arr.length)];
  return `${random_text}`;
}

module.exports  = magicball;