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
var core_1 = require("@angular/core");
var carservice_1 = require("./carservice");
var car_1 = require("./car");
var router_1 = require("@angular/router");
var EditCarComponent = (function () {
    function EditCarComponent(router, activeRoute, carservice) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.carservice = carservice;
        this.getBrands();
    }
    EditCarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.car = new car_1.Car();
        //get the car details when the page is loaded
        this.activeRoute.params
            .subscribe(function (params) { return _this.getCar(params['id']); });
    };
    EditCarComponent.prototype.getBrands = function () {
        var _this = this;
        this.carservice.getBrands().then(function (brands) { return _this.brands = brands; });
    };
    EditCarComponent.prototype.saveCar = function () {
        var _this = this;
        this.carservice.putCar(this.car).then(function (id) { return _this.saveCarSuccess(id); });
    };
    EditCarComponent.prototype.getCar = function (id) {
        var _this = this;
        this.carservice.getCar(id).then(function (car) { return _this.car = car; });
    };
    //when the car is updated show success message and redirect allcars page
    EditCarComponent.prototype.saveCarSuccess = function (id) {
        alert("Car Updated");
        this.router.navigateByUrl('/allcars');
    };
    return EditCarComponent;
}());
EditCarComponent = __decorate([
    core_1.Component({
        selector: 'add-car',
        template: "\n        <form (ngSubmit)=\"saveCar()\">\n            <div class=\"form-group\">\n                <label for=\"Name\">Name</label>\n                <input class=\"form-control\" [(ngModel)]=\"car.Name\" name=\"Name\" type=\"text\" placeholder=\"Car Name\" required/>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"Year\">Year</label>\n                <input class=\"form-control\" [(ngModel)]=\"car.Year\" name=\"Year\" type=\"number\" placeholder=\"Year\" required/>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"Brand\">Brand</label>\n                <select class=\"form-control\" [(ngModel)]=\"car.Brand\" name=\"Brand\" required>\n                    <option *ngFor=\"let brand of brands\" selected=\"{{car?.Brand?.Id===brand.Id ? true : null}}\" [ngValue]=\"brand\">{{brand.Name}}</option>\n                </select>\n            </div>\n        <button type=\"submit\" class=\"btn btn-default\">Update car</button>\n        </form>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, carservice_1.CarService])
], EditCarComponent);
exports.EditCarComponent = EditCarComponent;
//# sourceMappingURL=Editcar.component.js.map