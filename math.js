function math(input) {
console.log("dats",input);
let arr =input.split(/[+*/-]/);
var operator =input.search(/[+*/-]/);
var operator_str =input[operator];

console.log("arra is",arr)
let operator1 =parseInt(arr[0]);
console.log("First arg",operator1)
console.log(operator);
let operator2= parseInt(arr[1]);
console.log("First arg",operator2)
var result = 0;

switch(operator_str)  {

case '+' : 
           result = operator1 + operator2;
           console.log(result);
           return `${result}`;
           break;
case '-' : 
            result = operator1 - operator2;
           console.log(result);
           return `${result}`;
           break;

case '*' : 
          result = operator1 * operator2;
           console.log(result);
           return `${result}`;
           break;

case '%' : 
           result = operator1 / operator2;
           console.log(result);
           return `${result}`;
           break;


case '^' : 
           result = Math.pow(operator1,operator2)
           console.log(result);
           return `${result}`;
           break;


}
}
module.exports = math;