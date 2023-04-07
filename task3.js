function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a - b;
}

function multiply(a,b) {
    return a * b;
}
 function divide (a,b) {
    return a / b
 }
  
  console.log(add())
  console.log(subtract())
  console.log(multiply())
  console.log(divide())

  module.exports = {
    add,
    subtract,
    multiply,
    divide,
  };