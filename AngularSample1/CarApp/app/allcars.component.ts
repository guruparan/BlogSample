import { Component, OnInit } from '@angular/core'
import { CarService } from './carservice'
import { Car } from './car'

@Component({
    selector: 'all-cars',
    template: `
        <table style="width: auto;" class="table table-bordered">
            <tr>
                <th>Make</th>
                <th>Name</th>
                <th>Year</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr *ngFor="let car of cars">
                <td>{{car?.Brand?.Name}}</td>
                <td>{{car.Name}}</td>
                <td>{{car.Year}}</td>
                <td><a class="btn btn-default" role="button" href='/viewcar/{{car.Id}}'>View</a></td>
                <td><a class="btn btn-default" role="button" href='/editcar/{{car.Id}}'>Edit</a></td>
                <td><button class="btn btn-default" (click)="deleteCar(car.Id)">Delete</button></td>
            </tr>
        </table>
    `
})
export class AllCarsComponent implements OnInit {

    //used to represent the cars to be displayed in the table
    cars: Car[];
    constructor(public carservice: CarService) {
    }

    ngOnInit(): void {
        this.getCars();
    }

    //reques the cars from the service
    getCars(): void {
        this.carservice.getCars().then(cars => this.cars = cars);
    }

    deleteCar(id: number) {
        this.carservice.deleteCar(id).then(car => this.deleteCarSuccess(car));
    }

    deleteCarSuccess(car: Car): void {
        alert("Car " + car.Name + " Deleted");
        //When delete is succeeded remove it from the array to change the UI
        var index = this.cars.map(function (d) { return d['Id']; }).indexOf(car.Id);
        if (index > 0)
            this.cars.splice(index, 1);
    }
}