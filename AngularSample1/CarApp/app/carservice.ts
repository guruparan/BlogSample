import { Injectable } from '@angular/core'
import { Car } from './car'
import { Brand } from './brand'
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CarService {

    constructor(private http: Http) { }

    //The base url for the API
    serviceBase: string = "http://localhost:13963/";

    //Get all cars from the service
    getCars(): Promise<Car[]> {
        //here the reponse will be converted a car array and return when available
        return this.http.get(this.serviceBase + 'api/models', { headers: this.getHeaders() })
            .toPromise().then(response => response.json() as Car[]).
            catch(error => {
                //error will be logged in the console
                console.log(error);
            });
    }

    //get all brands from the service
    getBrands(): Promise<Brand[]> {
        return this.http.get(this.serviceBase + 'api/brands', { headers: this.getHeaders() })
            .toPromise().then(response => response.json() as Brand[]).
            catch(error => {
                console.log(error);
            });
    }

    //Get a single car by id
    getCar(id: number): Promise<Car> {
        return this.http.get(this.serviceBase + 'api/models/' + id, { headers: this.getHeaders() })
            .toPromise().then(response => response.json() as Car).
            catch(error => {
                console.log(error);
            });
    }

    //Post a new car to the service to create it
    postCar(car: Car): Promise<string> {
        return this.http.post(this.serviceBase + 'api/models', car, { headers: this.getHeaders() })
            .toPromise().then(response => response.json() as string).
            catch(error => {
                console.log(error);
            });
    }

    //update a car
    putCar(car: Car): Promise<string> {
        return this.http.put(this.serviceBase + 'api/models/' + car.Id, car, { headers: this.getHeaders() })
            .toPromise().then(response => "Success").
            catch(error => {
                console.log(error);
            });
    }

    //Delete a car
    deleteCar(id: number): Promise<Car> {
        return this.http.delete(this.serviceBase + 'api/models/' + id, { headers: this.getHeaders() })
            .toPromise().then(response => response.json() as Car).
            catch(error => {
                console.log(error);
            });
    }

    //Headers for the http request
    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }


}