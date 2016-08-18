var uitest=require("./index.js");

// Include read markup from example.html 
var fs = require('fs');
var HTML = fs.readFileSync('example.html').toString();

// analyseImages and get result
var result = uitest.analyseImages(HTML);

console.log(result);