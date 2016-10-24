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
        this.categories = [];
    }
    AttrsDataAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceCategories.getCategories()
            .then(function (categories) { return _this.categories = categories; });
    };
    AttrsDataAdminComponent.prototype.addCategory = function (newCat) {
        var _this = this;
        //On enlève les espaces blanc s'il y en a
        newCat = newCat.trim();
        //On regarde si newCategory a bien une valeur non nulle
        if (!newCat) {
            return;
        }
        //On effectue une requête http pour ajouter une nouvelle catégorie via le service categories
        this.serviceCategories.createCategory(newCat)
            .then(function (newCat) {
            //On ajoute la catégorie à la liste actuelle
            _this.categories.push(newCat);
            //On remet le champ des catégories à zéro une fois l'opération effectuée
            _this.newCategory = '';
        }, function () {
            console.log('il y a un problème');
        });
    };
    AttrsDataAdminComponent.prototype.editCategory = function (cat) {
        this.selectedCategory = cat;
        $('.page.dimmer:first')
            .dimmer('toggle');
    };
    AttrsDataAdminComponent.prototype.validateEditCategory = function (editedCategory) {
        var _this = this;
        this.serviceCategories.editCategory(editedCategory)
            .then(function () {
            _this.selectedCategory = null;
        });
        $('.page.dimmer:first')
            .dimmer('toggle');
    };
    AttrsDataAdminComponent.prototype.cancelEditCategory = function () {
        var _this = this;
        this.selectedCategory = null;
        this.serviceCategories.getCategories()
            .then(function (categories) {
            _this.categories = categories;
            $('.page.dimmer:first')
                .dimmer('toggle');
        });
    };
    AttrsDataAdminComponent.prototype.deleteCategory = function (category) {
        var _this = this;
        this.serviceCategories.deleteCategory(category._id)
            .then(function () {
            _this.categories = _this.categories.filter(function (cat) { return cat != category; });
        }, function (err) { return console.log('La catégorie n\'a pas été supprimée'); });
    };
    AttrsDataAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-attrs-data-admin-component',
            templateUrl: 'attrs_data.component.html',
            styleUrls: [
                'attrs_data.style.css'
            ]
        }), 
        __metadata('design:paramtypes', [categories_service_1.ServiceCaterogiesModules])
    ], AttrsDataAdminComponent);
    return AttrsDataAdminComponent;
}());
exports.AttrsDataAdminComponent = AttrsDataAdminComponent;
//# sourceMappingURL=attrs_data.component.js.map