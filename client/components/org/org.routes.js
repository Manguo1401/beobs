System.register(['@angular/core', '@angular/router', './home_page_org.component', './data_choice/data_choice_page.component', './home/home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_page_org_component_1, data_choice_page_component_1, home_component_1;
    var OrgRoutes;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_page_org_component_1_1) {
                home_page_org_component_1 = home_page_org_component_1_1;
            },
            function (data_choice_page_component_1_1) {
                data_choice_page_component_1 = data_choice_page_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            OrgRoutes = (function () {
                function OrgRoutes() {
                }
                OrgRoutes = __decorate([
                    core_1.NgModule({
                        imports: [
                            router_1.RouterModule.forChild([{
                                    path: 'org',
                                    component: home_page_org_component_1.HomePageOrg,
                                    children: [{
                                            path: 'accueil',
                                            component: home_component_1.HomeOrgComponent
                                        }, {
                                            path: 'data_choice',
                                            component: data_choice_page_component_1.DataChoicePage
                                        }, {
                                            path: '',
                                            redirectTo: 'accueil',
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
            exports_1("OrgRoutes", OrgRoutes);
        }
    }
});
//# sourceMappingURL=org.routes.js.map