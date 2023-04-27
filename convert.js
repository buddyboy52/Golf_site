// Reading the file using default
// fs npm package
const fs = require("fs");
csv = fs.readFileSync("golf-data.csv")
 
// Convert the data to String and
// split it in an array
const array = csv.toString().split("\r");

let result = [];

let headers = array[0].split(",");

for(let i = 1; i < array.length - 1; i++){

    let obj = {};

    let str = array[i];

    let s = '';

    let flag = 0;

    for(let ch of str){

        if(ch === '"' && flag ===0){

            flag = 1;

        }else if(ch === '"' && flag === 1){

            flag = 0;

        }

        if(ch === ', ' && flag === 0){

            ch = '|';

        }

        if(ch !== '"'){

            s += ch;

        }

    }

    let properties = s.split(",");

    //console.log(properties);

    //console.log(properties)

    for(let j in properties){


        if(properties[j].includes(",")){

            obj[headers[j]] = properties[j].split(", ").map(item => item.trim()); 

        }else{

            obj[headers[j]] = properties[j];


        }

    }

    result.push(obj)

}

// Convert the resultant array to json and
// generate the JSON output file.
let json = JSON.stringify(result);
fs.writeFileSync('golfer-data.json', json);

