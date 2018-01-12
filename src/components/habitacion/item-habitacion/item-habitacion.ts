import { Component, Input, OnInit } from '@angular/core';
import { DTOhabitacion, DTOHabitaciontipo } from "../../../modelos/DTOhabitacion";

/**
 * Generated class for the ItemHabitacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-habitacion',
  templateUrl: 'item-habitacion.html'
})
export class ItemHabitacionComponent implements OnInit {

  text: string;
  @Input() HABitem : DTOHabitaciontipo;
  //fotoPrincipal: string;

  constructor() {
    // console.log('Hello ItemHabitacionComponent Component');
    // this.text = 'Hello World';
    
  }

  ngOnInit(){
    //this.cargar();
  }

  // cargar(){
  //   if(this.HABitem.HTIfotos != undefined) {
  //     this.HABitem.HTIfotos.forEach(foto=>{
  //       if(foto.FOTprincipal){
  //         this.fotoPrincipal = foto.FOTurl;
  //       }
  //     });
  //   }else{
  //     this.fotoPrincipal = "";
  //   }
  // }
  

}
