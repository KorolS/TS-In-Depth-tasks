///<reference path="utility-functions.ts"/>
var util = Utility.Fees;
var fee = util.calculateLateFee(10);
console.log("Fee " + fee);
var books = Utility.maxBooksAllowed(2);
console.log("Max books " + books);
