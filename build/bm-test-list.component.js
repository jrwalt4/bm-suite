"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
//our root app component
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var Benchmark = require("benchmark");
var bm_reducer_1 = require("./bm-reducer");
var BmTestListComponent = (function () {
    function BmTestListComponent(store) {
        this.store = store;
        this.tests$ = store.select('tests');
        this.running$ = store.select('isRunning');
    }
    BmTestListComponent.prototype.newTest = function () {
        this.store.dispatch(bm_reducer_1.BmActions.addTest());
    };
    BmTestListComponent.prototype.changeTest = function (test) {
        this.store.dispatch(bm_reducer_1.BmActions.changeTest(test));
    };
    BmTestListComponent.prototype.removeTest = function (test) {
        this.store.dispatch(bm_reducer_1.BmActions.removeTest(test));
    };
    BmTestListComponent.prototype.runTests = function () {
        var _this = this;
        this.store.dispatch(bm_reducer_1.BmActions.runTests());
        var subs = this.tests$.subscribe(function (testArray) {
            var suite = new Benchmark.Suite('test-suite');
            var runTestsPromise = new Promise(function (resolve, reject) {
                for (var _i = 0, testArray_1 = testArray; _i < testArray_1.length; _i++) {
                    var test = testArray_1[_i];
                    var testOptions = test.getOptions();
                    suite.add(testOptions);
                }
                suite.on('complete', function (e) { return resolve(e); });
                suite.on('error', function (e) { return reject(e); });
                suite.run({
                    async: true
                });
            }).then(function (resultEvent) {
                subs.unsubscribe();
                var suite = resultEvent.currentTarget;
                var results = suite.map(function (test) {
                    return __assign({ name: test.name }, test.stats);
                });
                _this.store.dispatch(bm_reducer_1.BmActions.testsComplete(results));
            })["catch"](function (err) {
                alert(err.message);
            });
        });
    };
    return BmTestListComponent;
}());
BmTestListComponent = __decorate([
    core_1.Component({
        selector: 'bm-test-list',
        template: "\n    <div>\n      <button (click)=\"runTests()\" [disabled]=\"running$ | async\">Run Tests</button><br>\n      <label>Setup Code</label>\n      <textarea></textarea>\n      <br>\n      <bm-test \n        *ngFor=\"let test of tests$ | async\" \n        [test]=\"test\"\n        (onTestChange)=\"changeTest($event)\"\n        (onRemoveTest)=\"removeTest($event)\">\n      </bm-test>\n      <br>\n      <button (click)=\"newTest()\">Add Test</button>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [store_1.Store])
], BmTestListComponent);
exports.BmTestListComponent = BmTestListComponent;
