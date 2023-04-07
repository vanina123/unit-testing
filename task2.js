function reverseString(string){
    let reverseStr = '';
    for(let i = string.length-1; i >= 0; i--){
        reverseStr += string[i]
    }
    return reverseStr;
}
const string = 'Larissa';
console.log(reverseString(string))

module.exports = reverseString;