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
var AllCarsComponent = (function () {
    function AllCarsComponent(carservice) {
        this.carservice = carservice;
    }
    AllCarsComponent.prototype.ngOnInit = function () {
        this.getCars();
    };
    //reques the cars from the service
    AllCarsComponent.prototype.getCars = function () {
        var _this = this;
        this.carservice.getCars().then(function (cars) { return _this.cars = cars; });
    };
    AllCarsComponent.prototype.deleteCar = function (id) {
        var _this = this;
        this.carservice.deleteCar(id).then(function (car) { return _this.deleteCarSuccess(car); });
    };
    AllCarsComponent.prototype.deleteCarSuccess = function (car) {
        alert("Car " + car.Name + " Deleted");
        //When delete is succeeded remove it from the array to change the UI
        var index = this.cars.map(function (d) { return d['Id']; }).indexOf(car.Id);
        if (index > 0)
            this.cars.splice(index, 1);
    };
    return AllCarsComponent;
}());
AllCarsComponent = __decorate([
    core_1.Component({
        selector: 'all-cars',
        template: "\n        <table style=\"width: auto;\" class=\"table table-bordered\">\n            <tr>\n                <th>Make</th>\n                <th>Name</th>\n                <th>Year</th>\n                <th>View</th>\n                <th>Edit</th>\n                <th>Delete</th>\n            </tr>\n            <tr *ngFor=\"let car of cars\">\n                <td>{{car?.Brand?.Name}}</td>\n                <td>{{car.Name}}</td>\n                <td>{{car.Year}}</td>\n                <td><a class=\"btn btn-default\" role=\"button\" href='/viewcar/{{car.Id}}'>View</a></td>\n                <td><a class=\"btn btn-default\" role=\"button\" href='/editcar/{{car.Id}}'>Edit</a></td>\n                <td><button class=\"btn btn-default\" (click)=\"deleteCar(car.Id)\">Delete</button></td>\n            </tr>\n        </table>\n    "
    }),
    __metadata("design:paramtypes", [carservice_1.CarService])
], AllCarsComponent);
exports.AllCarsComponent = AllCarsComponent;
//# sourceMappingURL=allcars.component.js.map