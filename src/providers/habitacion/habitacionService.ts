import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DTOHabitaciontipo } from '../../modelos/DTOhabitacion';

/*
  Generated class for the HabitacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HabitacionProvider {
 
  
  constructor(public afs: AngularFirestore) {
   
  }


  getHabitacionTipo(idDocumento, idHabitacion): Observable<any>{
    return this.afs.collection('/Establecimientos/'+ idDocumento +'/HabitacionTipos').doc('/' + idHabitacion).valueChanges();
  }
}
