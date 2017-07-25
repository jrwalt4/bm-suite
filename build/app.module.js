"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var store_1 = require("@ngrx/store");
var app_component_1 = require("./app.component");
var bm_test_component_1 = require("./bm-test.component");
var bm_results_component_1 = require("./bm-results.component");
var bm_test_list_component_1 = require("./bm-test-list.component");
var bm_debug_component_1 = require("./bm-debug.component");
var bm_reducer_1 = require("./bm-reducer");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                store_1.StoreModule.forRoot(bm_reducer_1.reducer)
            ],
            declarations: [
                app_component_1.AppComponent,
                bm_test_component_1.BmTestComponent,
                bm_results_component_1.BmResultsComponent,
                bm_test_list_component_1.BmTestListComponent,
                bm_debug_component_1.BmDebugComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
