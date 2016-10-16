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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require("@angular/http");
var app_component_1 = require('./app.component');
var page_not_found_component_1 = require('./components/page_not_found.component');
//Importation des routes
var app_routes_1 = require("./app.routes"); //A mettre en dernier pour les routes
var home_module_1 = require("./components/home.module"); //A mettre en dernier pour les routes
var org_module_1 = require("./components/org/org.module"); //A mettre en dernier pour les routes
var categories_service_1 = require("./services/modules/categories.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                home_module_1.HomeModule,
                org_module_1.OrgModule,
                app_routes_1.AppRoutes //A placer après les modules annexes
            ],
            providers: [
                categories_service_1.ServiceCaterogiesModules
            ],
            declarations: [
                app_component_1.AppComponent,
                page_not_found_component_1.PageNotFound
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map