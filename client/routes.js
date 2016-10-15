System.register(['@angular/router', './components/home_main_page.component', './components/org/home_org_page.component', './components/org/data_items/attrs_data_choice_page.component', './components/org/data_items/localisation_choice_page.component', './components/org/data_items/species_choice_page.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_main_page_component_1, home_org_page_component_1, attrs_data_choice_page_component_1, localisation_choice_page_component_1, species_choice_page_component_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_main_page_component_1_1) {
                home_main_page_component_1 = home_main_page_component_1_1;
            },
            function (home_org_page_component_1_1) {
                home_org_page_component_1 = home_org_page_component_1_1;
            },
            function (attrs_data_choice_page_component_1_1) {
                attrs_data_choice_page_component_1 = attrs_data_choice_page_component_1_1;
            },
            function (localisation_choice_page_component_1_1) {
                localisation_choice_page_component_1 = localisation_choice_page_component_1_1;
            },
            function (species_choice_page_component_1_1) {
                species_choice_page_component_1 = species_choice_page_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [{
                    path: 'accueil',
                    component: home_main_page_component_1.HomeMainPage
                }, {
                    path: '',
                    redirectTo: 'accueil',
                    pathMatch: 'full'
                }, {
                    path: 'org',
                    children: [{
                            path: 'accueil',
                            component: home_org_page_component_1.HomeOrgPage
                        }, {
                            path: '',
                            redirectTo: 'accueil',
                            pathMatch: 'full'
                        }, {
                            path: 'donnees_attributaires',
                            children: [{
                                    path: '',
                                    redirectTo: 'attrs_data_choice',
                                    pathMatch: 'full'
                                }, {
                                    path: 'attrs_data_choice',
                                    component: attrs_data_choice_page_component_1.AttrsDataChoicePage
                                }, {
                                    path: 'localisation_choice',
                                    component: localisation_choice_page_component_1.LocalisationChoicePage
                                }, {
                                    path: 'species_choice',
                                    component: species_choice_page_component_1.SpeciesChoicePage
                                }]
                        }]
                }]);
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes, { useHash: true }));
        }
    }
});
//# sourceMappingURL=routes.js.map