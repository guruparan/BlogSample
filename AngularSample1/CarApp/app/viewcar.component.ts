import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { Car } from './car'
import 'rxjs/add/operator/switchMap';
import { CarService } from './carservice'

@Component({
    selector: 'view-car',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">Details of {{car.Name}}</div>
            <div class="panel-body">
            <div>
             Id: {{car.Id}}
            </div>
            <div>
             Year : {{car.Year}}
            </div>
            <div>
             Make : {{car?.Brand?.Name}}
            </div>
            </div>
        </div>
    `
})
export class ViewCarComponent implements OnInit {

    //Model representing the car to be displayed
    private car: Car;

    //constructor to receive the routing and car service
    constructor(private route: ActivatedRoute, public carservice: CarService) {

    }

    //when the module is loaded car will be requested from the service
    ngOnInit(): void {
        this.car = new Car();
        this.route.params
        //get the car id from the url
            .subscribe((params: Params) => this.getCar(params['id']));
    }

    //when the service returns success this method will be called
    getCar(id: number) {
        this.carservice.getCar(id).then(car => this.car = car);
    }
}