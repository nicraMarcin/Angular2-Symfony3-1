"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// NG-MODULES
var core_1 = require("@angular/core");
// MODULES
var ng2_translate_module_1 = require("../common/modules/ng2-translate.module");
var home_routing_module_1 = require("./home-routing.module");
// COMPONENTS
var home_component_1 = require("./components/home.component");
// PROVIDERS
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            ng2_translate_module_1.Ng2TranslateModule,
            home_routing_module_1.HomeRoutingModule,
        ],
        declarations: [
            home_component_1.HomeComponent,
        ],
        providers: []
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map