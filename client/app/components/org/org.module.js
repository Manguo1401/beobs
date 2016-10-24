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
var org_routes_1 = require('./org.routes');
//Compnsants pour les organismes
var home_page_org_component_1 = require('./home_page_org.component');
var home_component_1 = require('./home/home.component');
var data_choice_page_component_1 = require('./data_choice/data_choice_page.component');
var attrs_data_choice_component_1 = require('./data_choice/attrs_data/attrs_data_choice.component');
var location_choice_component_1 = require('./data_choice/location_data/location_choice.component');
var species_choice_component_1 = require('./data_choice/species_data/species_choice.component');
var OrgModule = (function () {
    function OrgModule() {
    }
    OrgModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                org_routes_1.OrgRoutes
            ],
            declarations: [
                home_page_org_component_1.HomePageOrg,
                home_component_1.HomeOrgComponent,
                data_choice_page_component_1.DataChoicePage,
                attrs_data_choice_component_1.AttrsDataChoiceOrgComponent,
                location_choice_component_1.LocationChoiceOrgComponent,
                species_choice_component_1.SpeciesChoiceOrgComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], OrgModule);
    return OrgModule;
}());
exports.OrgModule = OrgModule;
//# sourceMappingURL=org.module.js.map