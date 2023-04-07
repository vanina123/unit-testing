const { string } = require("yargs");

function stringLength(string) {
    if(string.length < 10){
        return string.length
    }else{
        throw Error('charater more than 10')
    }
}

console.log(stringLength(string))


module.exports = stringLength;