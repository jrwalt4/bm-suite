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
    return BmTestComponent;
}());
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
        template: "\n    <div class=\"bm-test\">\n      <form id={{getName()}}>\n        <label for=\"name\">Test Name</label>\n        <input type=\"text\" name=\"name\" [(ngModel)]=\"test.name\"/>\n        <div class=\"form-group\">\n          <textarea name=\"fn\" class=\"code\" [(ngModel)]=\"test.fn\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"async\">Async</label>\n          <input type=\"checkbox\" name=\"async\" [(ngModel)]=\"test.async\"/>\n          <br>\n        </div>\n        <button (click)=\"onRemoveTest.emit(test)\">Delete</button>\n      </form>\n    </div>\n  ",
        styles: [
            "\n    .bm-test {\n      outline:1px solid black;\n      display:inline-block;\n      vertical-align:top;\n    }\n  "
        ]
    }),
    __metadata("design:paramtypes", [])
], BmTestComponent);
exports.BmTestComponent = BmTestComponent;
