import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from "rxjs/Observable";
/*
  Generated class for the EstablecimientoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EstablecimientoProvider {

  ColletionEST: AngularFirestoreCollection<any>;
  EST: Observable<any[]>;

  constructor(public afs: AngularFirestore) {
    this.EST = this.afs.collection('Establecimientos').valueChanges();
  }

  getEstablecimientos(){
    return this.EST;
  }
}
