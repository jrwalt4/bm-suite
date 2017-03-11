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
var store_1 = require("@ngrx/store");
var BmResultsComponent = (function () {
    function BmResultsComponent(store) {
        this.store = store;
        this.results$ = store.select('results');
        this.running$ = store.select('isRunning');
    }
    return BmResultsComponent;
}());
BmResultsComponent = __decorate([
    core_1.Component({
        selector: 'bm-results',
        template: "\n  <div *ngIf=\"results$ | async\">\n    <table>\n      <tr>\n        <th>Test</th><th>Speed</th><th>Rank</th>\n      </tr>\n      <tr *ngFor=\"let test of results$ | async\">\n        <td>{{test.name}}</td>\n        <td>{{test.stats.mean | number:'1.2-10'}}</td>\n        <td>{{test.stats.rank}}</td>\n      </tr>\n    </table>\n  </div>\n  <div *ngIf=\"running$ | async\" >\n    <img \n      src=\"http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_gray_512.gif\"\n      width=\"100\">\n  </div>\n  ",
        styles: [
            'table{border-collapse:collapse}',
            'td, th{border:1px solid black}'
        ]
    }),
    __metadata("design:paramtypes", [store_1.Store])
], BmResultsComponent);
exports.BmResultsComponent = BmResultsComponent;
