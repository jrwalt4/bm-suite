"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var counter = 0;
var BmTest = (function () {
    function BmTest() {
        this.name = "Test " + (++counter);
        this.fn = lodash_1.sample(sampleTests);
        this.async = true;
    }
    BmTest.prototype.getOptions = function () {
        return lodash_1.toPlainObject(this);
    };
    return BmTest;
}());
exports.BmTest = BmTest;
var sampleTests = [
    "Math.sin(2)",
    "Math.sqrt(2)",
    "Math.asin(2)"
];
