import { Component, OnInit } from '@angular/core'
import { CarService } from './carservice'
import { Brand } from './brand'
import { Car } from './car'
import { Router } from '@angular/router';

@Component({
    selector: 'add-car',
    template: `

        <form (ngSubmit)="saveCar()">

            <div class="form-group">
                <label for="Name">Name</label>
                <input class="form-control" [(ngModel)]="car.Name" name="Name" type="text" placeholder="Car Name" required/>
            </div>

            <div class="form-group">
                <label for="Year">Year</label>
                <input class="form-control" [(ngModel)]="car.Year" name="Year" type="number" placeholder="Year" required/>
            </div>

            <div class="form-group">
                <label for="Brand">Brand</label>
                <select class="form-control" [(ngModel)]="car.Brand" name="Brand" required>
                    <option *ngFor="let brand of brands"  [ngValue]="brand">{{brand.Name}}</option>
                </select>
            </div>
        <button type="submit" class="btn btn-default">Save car</button>
        </form>

    `
})
export class AddCarComponent implements OnInit {

    //represents the brands dropdown
    private brands: Brand[];
    //represents the car to be added
    private car: Car;

    ngOnInit(): void {

    }

    constructor(public router: Router, public carservice: CarService) {
        this.getBrands();
        this.car = new Car();
        //set default values
        this.car.Year = 2000;
    }

    //Get brands from service
    getBrands(): void {
        this.carservice.getBrands().then(brands => this.brands = brands);
    }

    //send the post car request to service
    saveCar(): void {
        this.carservice.postCar(this.car).then(id => this.saveCarSuccess(id));
    }

    //when save car request is success display message and route to all cars
    saveCarSuccess(id: Object): void {
        alert("Car Added");
        this.router.navigateByUrl('/allcars');
    }
}