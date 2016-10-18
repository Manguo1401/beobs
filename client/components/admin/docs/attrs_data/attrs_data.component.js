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
var categories_service_1 = require('./../../../../services/attrs_data/categories.service');
var AttrsDataAdminComponent = (function () {
    function AttrsDataAdminComponent(serviceCategories) {
        this.serviceCategories = serviceCategories;
        this.newCategory = 'test';
        this.categories = [];
    }
    AttrsDataAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceCategories.getCategories()
            .then(function (categories) { return _this.categories = categories; });
    };
    AttrsDataAdminComponent.prototype.addCategory = function (newCat) {
        console.log(newCat);
    };
    AttrsDataAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-attrs-data-admin-component',
            templateUrl: 'attrs_data.component.html'
        }), 
        __metadata('design:paramtypes', [categories_service_1.ServiceCaterogiesModules])
    ], AttrsDataAdminComponent);
    return AttrsDataAdminComponent;
}());
exports.AttrsDataAdminComponent = AttrsDataAdminComponent;
//# sourceMappingURL=attrs_data.component.js.map