///<reference path="utility-functions.ts"/>
import util = Utility.Fees;

const fee = util.calculateLateFee(10);
console.log(`Fee ${fee}`);
const books = Utility.maxBooksAllowed(2);
console.log(`Max books ${books}`);