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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var CarService = (function () {
    function CarService(http) {
        this.http = http;
        //The base url for the API
        this.serviceBase = "http://localhost:13963/";
    }
    //Get all cars from the service
    CarService.prototype.getCars = function () {
        //here the reponse will be converted a car array and return when available
        return this.http.get(this.serviceBase + 'api/models', { headers: this.getHeaders() })
            .toPromise().then(function (response) { return response.json(); }).
            catch(function (error) {
            //error will be logged in the console
            console.log(error);
        });
    };
    //get all brands from the service
    CarService.prototype.getBrands = function () {
        return this.http.get(this.serviceBase + 'api/brands', { headers: this.getHeaders() })
            .toPromise().then(function (response) { return response.json(); }).
            catch(function (error) {
            console.log(error);
        });
    };
    //Get a single car by id
    CarService.prototype.getCar = function (id) {
        return this.http.get(this.serviceBase + 'api/models/' + id, { headers: this.getHeaders() })
            .toPromise().then(function (response) { return response.json(); }).
            catch(function (error) {
            console.log(error);
        });
    };
    //Post a new car to the service to create it
    CarService.prototype.postCar = function (car) {
        return this.http.post(this.serviceBase + 'api/models', car, { headers: this.getHeaders() })
            .toPromise().then(function (response) { return response.json(); }).
            catch(function (error) {
            console.log(error);
        });
    };
    //update a car
    CarService.prototype.putCar = function (car) {
        return this.http.put(this.serviceBase + 'api/models/' + car.Id, car, { headers: this.getHeaders() })
            .toPromise().then(function (response) { return "Success"; }).
            catch(function (error) {
            console.log(error);
        });
    };
    //Delete a car
    CarService.prototype.deleteCar = function (id) {
        return this.http.delete(this.serviceBase + 'api/models/' + id, { headers: this.getHeaders() })
            .toPromise().then(function (response) { return response.json(); }).
            catch(function (error) {
            console.log(error);
        });
    };
    //Headers for the http request
    CarService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    return CarService;
}());
CarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=carservice.js.map