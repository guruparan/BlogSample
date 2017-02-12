import { Component, OnInit } from '@angular/core'
import { CarService } from './carservice'
import { Brand } from './brand'
import { FormsModule } from '@angular/forms';
import { Car } from './car'
import { Router, ActivatedRoute, Params } from '@angular/router';
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
                    <option *ngFor="let brand of brands" selected="{{car?.Brand?.Id===brand.Id ? true : null}}" [ngValue]="brand">{{brand.Name}}</option>
                </select>
            </div>
        <button type="submit" class="btn btn-default">Update car</button>
        </form>
    `
})
//Most of the contents of this class are same as the addcar component class
export class EditCarComponent implements OnInit {

    private brands: Brand[];
    private car: Car;

    ngOnInit(): void {
        this.car = new Car();
        //get the car details when the page is loaded
        this.activeRoute.params
            .subscribe((params: Params) => this.getCar(params['id']));
    }

    constructor(public router: Router, private activeRoute: ActivatedRoute, public carservice: CarService) {
        this.getBrands();
    }

    getBrands(): void {
        this.carservice.getBrands().then(brands => this.brands = brands);
    }

    saveCar(): void {
        this.carservice.putCar(this.car).then(id => this.saveCarSuccess(id));
    }

    getCar(id: number) {
        this.carservice.getCar(id).then(car => this.car = car);
    }

    //when the car is updated show success message and redirect allcars page
    saveCarSuccess(id: Object): void {
        alert("Car Updated");
        this.router.navigateByUrl('/allcars');
    }
}