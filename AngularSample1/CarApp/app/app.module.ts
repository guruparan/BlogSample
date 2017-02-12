import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { CarService } from './carservice'
import { AllCarsComponent } from './allcars.component'
import { ViewCarComponent } from './viewcar.component'
import { HttpModule } from '@angular/http';
import { AddCarComponent } from './addcar.component'
import { EditCarComponent } from './Editcar.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //initialize the routing and add routes
    RouterModule.forRoot([
      {
        path: 'allcars',
        component: AllCarsComponent
      },
      {
        path: 'viewcar/:id',
        component: ViewCarComponent
      },
      {
        path: 'editcar/:id',
        component: EditCarComponent
      },
      {
        path: 'addcar',
        component: AddCarComponent
      }
    ]),
    HttpModule
  ],
  declarations: [AppComponent, AllCarsComponent, ViewCarComponent, AddCarComponent, EditCarComponent],
  bootstrap: [AppComponent],
  providers: [CarService],

})
export class AppModule {

}