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
var home_page_org_component_1 = require('./home_page_org.component');
var data_choice_page_component_1 = require('./data_choice/data_choice_page.component');
var home_component_1 = require('./home/home.component');
var attrs_data_choice_component_1 = require('./data_choice/attrs_data/attrs_data_choice.component');
var location_choice_component_1 = require('./data_choice/location_data/location_choice.component');
var species_choice_component_1 = require('./data_choice/species_data/species_choice.component');
var OrgRoutes = (function () {
    function OrgRoutes() {
    }
    OrgRoutes = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([{
                        path: 'org',
                        component: home_page_org_component_1.HomePageOrg,
                        children: [{
                                path: 'home',
                                component: home_component_1.HomeOrgComponent
                            }, {
                                path: 'data_choice',
                                component: data_choice_page_component_1.DataChoicePage,
                                children: [{
                                        path: 'attrs_data',
                                        component: attrs_data_choice_component_1.AttrsDataChoiceOrgComponent
                                    }, {
                                        path: 'location',
                                        component: location_choice_component_1.LocationChoiceOrgComponent
                                    }, {
                                        path: 'species',
                                        component: species_choice_component_1.SpeciesChoiceOrgComponent
                                    }, {
                                        path: '',
                                        redirectTo: 'attrs_data',
                                        pathMatch: 'full'
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
    ], OrgRoutes);
    return OrgRoutes;
}());
exports.OrgRoutes = OrgRoutes;
//# sourceMappingURL=org.routes.js.map