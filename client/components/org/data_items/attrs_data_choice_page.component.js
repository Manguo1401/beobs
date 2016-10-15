System.register(['@angular/core', './../../../services/modules/categories.service'], function(exports_1, context_1) {
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
    var core_1, categories_service_1;
    var AttrsDataChoicePage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (categories_service_1_1) {
                categories_service_1 = categories_service_1_1;
            }],
        execute: function() {
            AttrsDataChoicePage = (function () {
                function AttrsDataChoicePage(serviceCategories) {
                    this.serviceCategories = serviceCategories;
                    this.categories = [];
                }
                AttrsDataChoicePage.prototype.ngOnInit = function () {
                    var _this = this;
                    this.serviceCategories.getCategories()
                        .then(function (categories) { return _this.categories = categories; } /*; console.log(categories)}*/);
                };
                AttrsDataChoicePage = __decorate([
                    core_1.Component({
                        selector: 'my-attrs-data-choice',
                        templateUrl: 'client/components/org/data_items/attrs_data_choice_page.component.html'
                    }), 
                    __metadata('design:paramtypes', [categories_service_1.ServiceCaterogiesModules])
                ], AttrsDataChoicePage);
                return AttrsDataChoicePage;
            }());
            exports_1("AttrsDataChoicePage", AttrsDataChoicePage);
        }
    }
});
//# sourceMappingURL=attrs_data_choice_page.component.js.map