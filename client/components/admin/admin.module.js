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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var admin_routes_1 = require('./admin.routes');
//Compnsants pour le panneau d'administration
var home_page_admin_component_1 = require('./home_page_admin.component');
var docs_page_component_1 = require('./docs/docs_page.component');
var home_admin_component_1 = require('./home/home_admin.component');
var attrs_data_component_1 = require('./docs/attrs_data/attrs_data.component');
var species_management_component_1 = require('./docs/species/species_management.component');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                admin_routes_1.AdminRoutes
            ],
            declarations: [
                home_page_admin_component_1.HomePageAdmin,
                home_admin_component_1.HomeAdminComponent,
                docs_page_component_1.DocsAdminPage,
                attrs_data_component_1.AttrsDataAdminComponent,
                species_management_component_1.SpeciesManagementComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map