var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunction() {
        console.log("This is private function");
    }
})(Utility || (Utility = {}));
///<reference path="utility-functions.ts"/>
var util = Utility.Fees;
var fee = util.calculateLateFee(10);
console.log("Fee " + fee);
var books = Utility.maxBooksAllowed(2);
console.log("Max books " + books);
