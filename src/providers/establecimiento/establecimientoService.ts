import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from "rxjs/Observable";
import { DTOEstablecimiento } from '../../modelos/DTOEstablecimiento';
import { DTOHabitaciontipo, DTOhabitacion } from '../../modelos/DTOhabitacion';
/*
  Generated class for the EstablecimientoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EstablecimientoProvider {

  ESTcolletion: AngularFirestoreCollection<DTOEstablecimiento>;
  EST: Observable<DTOEstablecimiento[]>;

  constructor(public afs: AngularFirestore
    , public http: Http) {
   this.ESTcolletion = this.afs.collection('/Establecimientos');
   this.EST = this.ESTcolletion.snapshotChanges().map(actions =>{
    
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        data.ESTid = a.payload.doc.id;

        this.obtenerHabitacionTipos(data.ESTid).subscribe( coleccion =>{
            data.ESThabitacionesTipos = coleccion as DTOHabitaciontipo[];            
        });
        // this.obtenerHabitacion(data.id).subscribe( coleccion =>{
        //   data.ESThabitaciones = coleccion as DTOhabitacion[];
        // });
        return data;
      });
    });
  }

  getEstablecimientos(){
    return this.EST;
  }

  obtenerHabitacionTipos(idDocumento): Observable<any[]>{
    return this.afs.collection('/Establecimientos/'+ idDocumento +'/HabitacionTipos').valueChanges();
  }

  obtenerHabitacion(idDocumento):  Observable<any[]>{
    return this.afs.collection('/Establecimientos/'+ idDocumento +'/Habitaciones').valueChanges();
  }

  obtenerDistancia(){
    var url = "https://maps.googleapis.com/maps/api/distancematrix/xml?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Vancouver+BC&mode=bicycling&language=fr-FR&key=AIzaSyC2uWKfdyE83hwcusrOlIOqW6UJf2cnGms"
    this.http.get(url).subscribe(response =>{
      console.log(response.json);
    });
  }
}
