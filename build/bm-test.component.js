"use strict";
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
var core_1 = require("@angular/core");
var bm_test_1 = require("./bm-test");
var BmTestComponent = (function () {
    function BmTestComponent() {
        this.onTestChange = new core_1.EventEmitter();
        this.onRemoveTest = new core_1.EventEmitter();
    }
    BmTestComponent.prototype.getMessage = function () {
        if (this.test) {
            return "Benchmark Test: " + this.test.name;
        }
        return "";
    };
    BmTestComponent.prototype.getName = function () {
        return this.test.name;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", bm_test_1.BmTest)
    ], BmTestComponent.prototype, "test");
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], BmTestComponent.prototype, "onTestChange");
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], BmTestComponent.prototype, "onRemoveTest");
    BmTestComponent = __decorate([
        core_1.Component({
            selector: 'bm-test',
            template: "\n    <div class=\"bm-test well\">\n      <form class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"control-label col-lg-3\">Test Name:</label>\n          <div class=\"col-lg-9\">\n          <input type=\"text\" name=\"name\" \n            [(ngModel)]=\"test.name\" class=\"form-control\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"fn\" class=\"control-label col-lg-3\">Code:</label>\n          <div class=\"col-lg-9\">\n            <textarea name=\"fn\" class=\"code form-control col-lg-9\" \n              [(ngModel)]=\"test.fn\">\n            </textarea>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-4\">\n            <label for=\"async\" class=\"control-label\">\n              <input type=\"checkbox\" name=\"async\" [(ngModel)]=\"test.async\"/>\n              Async\n            </label>\n          </div>\n        </div>\n        <button (click)=\"onRemoveTest.emit(test)\" \n          class=\"btn btn-danger\" role=\"button\">Delete</button>\n      </form>\n    </div>\n  ",
            styles: [
                "\n    .bm-test {\n      display:inline-block;\n      vertical-align:top;\n    }\n  "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BmTestComponent);
    return BmTestComponent;
}());
exports.BmTestComponent = BmTestComponent;
