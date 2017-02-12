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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var carservice_1 = require("./carservice");
var allcars_component_1 = require("./allcars.component");
var viewcar_component_1 = require("./viewcar.component");
var http_1 = require("@angular/http");
var addcar_component_1 = require("./addcar.component");
var Editcar_component_1 = require("./Editcar.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            //initialize the routing and add routes
            router_1.RouterModule.forRoot([
                {
                    path: 'allcars',
                    component: allcars_component_1.AllCarsComponent
                },
                {
                    path: 'viewcar/:id',
                    component: viewcar_component_1.ViewCarComponent
                },
                {
                    path: 'editcar/:id',
                    component: Editcar_component_1.EditCarComponent
                },
                {
                    path: 'addcar',
                    component: addcar_component_1.AddCarComponent
                }
            ]),
            http_1.HttpModule
        ],
        declarations: [app_component_1.AppComponent, allcars_component_1.AllCarsComponent, viewcar_component_1.ViewCarComponent, addcar_component_1.AddCarComponent, Editcar_component_1.EditCarComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [carservice_1.CarService],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map