import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HabitacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HabitacionProvider {
 
  constructor(public http: Http) {
    console.log('Hello HabitacionProvider Provider');
  }

}
