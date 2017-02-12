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
var AddCarComponent = (function () {
    function AddCarComponent(router, carservice) {
        this.router = router;
        this.carservice = carservice;
        this.getBrands();
        this.car = new car_1.Car();
        //set default values
        this.car.Year = 2000;
    }
    AddCarComponent.prototype.ngOnInit = function () {
    };
    //Get brands from service
    AddCarComponent.prototype.getBrands = function () {
        var _this = this;
        this.carservice.getBrands().then(function (brands) { return _this.brands = brands; });
    };
    //send the post car request to service
    AddCarComponent.prototype.saveCar = function () {
        var _this = this;
        this.carservice.postCar(this.car).then(function (id) { return _this.saveCarSuccess(id); });
    };
    //when save car request is success display message and route to all cars
    AddCarComponent.prototype.saveCarSuccess = function (id) {
        alert("Car Added");
        this.router.navigateByUrl('/allcars');
    };
    return AddCarComponent;
}());
AddCarComponent = __decorate([
    core_1.Component({
        selector: 'add-car',
        template: "\n\n        <form (ngSubmit)=\"saveCar()\">\n\n            <div class=\"form-group\">\n                <label for=\"Name\">Name</label>\n                <input class=\"form-control\" [(ngModel)]=\"car.Name\" name=\"Name\" type=\"text\" placeholder=\"Car Name\" required/>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"Year\">Year</label>\n                <input class=\"form-control\" [(ngModel)]=\"car.Year\" name=\"Year\" type=\"number\" placeholder=\"Year\" required/>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"Brand\">Brand</label>\n                <select class=\"form-control\" [(ngModel)]=\"car.Brand\" name=\"Brand\" required>\n                    <option *ngFor=\"let brand of brands\"  [ngValue]=\"brand\">{{brand.Name}}</option>\n                </select>\n            </div>\n        <button type=\"submit\" class=\"btn btn-default\">Save car</button>\n        </form>\n\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router, carservice_1.CarService])
], AddCarComponent);
exports.AddCarComponent = AddCarComponent;
//# sourceMappingURL=addcar.component.js.map