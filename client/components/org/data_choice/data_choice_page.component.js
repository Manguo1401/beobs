System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var DataChoicePage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataChoicePage = (function () {
                function DataChoicePage() {
                }
                DataChoicePage = __decorate([
                    core_1.Component({
                        selector: 'my-attrs-data-choice',
                        templateUrl: 'client/components/org/data_choice/data_choice_page.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DataChoicePage);
                return DataChoicePage;
            }());
            exports_1("DataChoicePage", DataChoicePage);
        }
    }
});
//# sourceMappingURL=data_choice_page.component.js.map