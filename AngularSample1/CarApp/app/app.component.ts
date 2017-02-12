import { Component } from '@angular/core'


@Component({
    template:
    `
    <h1>Manage Cars</h1>
    <a class="btn btn-primary" role="button" routerLink="/allcars">All Cars</a>
    <a class="btn btn-primary" role="button" routerLink="/addcar">Add Car</a>
    <br/>
    <router-outlet></router-outlet>    
    `,
    selector: 'car-app'
})
export class AppComponent {

}