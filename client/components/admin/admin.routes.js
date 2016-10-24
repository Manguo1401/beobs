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
var router_1 = require('@angular/router');
var home_page_admin_component_1 = require('./home_page_admin.component');
var home_admin_component_1 = require('./home/home_admin.component');
var docs_page_component_1 = require('./docs/docs_page.component');
var attrs_data_component_1 = require('./docs/attrs_data/attrs_data.component');
var species_management_component_1 = require('./docs/species/species_management.component');
var AdminRoutes = (function () {
    function AdminRoutes() {
    }
    AdminRoutes = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([{
                        path: 'admin',
                        component: home_page_admin_component_1.HomePageAdmin,
                        children: [{
                                path: 'home',
                                component: home_admin_component_1.HomeAdminComponent
                            }, {
                                path: 'docs',
                                component: docs_page_component_1.DocsAdminPage,
                                children: [{
                                        path: 'attrs_data',
                                        component: attrs_data_component_1.AttrsDataAdminComponent
                                    }, {
                                        path: '',
                                        redirectTo: 'attrs_data',
                                        pathMatch: 'full'
                                    }, {
                                        path: 'species_management',
                                        component: species_management_component_1.SpeciesManagementComponent
                                    }]
                            }, {
                                path: '',
                                redirectTo: 'home',
                                pathMatch: 'full'
                            }]
                    }])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminRoutes);
    return AdminRoutes;
}());
exports.AdminRoutes = AdminRoutes;
//# sourceMappingURL=admin.routes.js.map