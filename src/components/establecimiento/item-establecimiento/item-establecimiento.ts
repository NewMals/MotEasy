import { Component, Input, OnInit } from '@angular/core';
import { DTOEstablecimiento } from "../../../modelos/DTOEstablecimiento";

/**
 * Generated class for the ItemEstablecimientoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-establecimiento',
  templateUrl: 'item-establecimiento.html'
})
export class ItemEstablecimientoComponent implements OnInit{

  text: string;
  @Input() ESTitem : DTOEstablecimiento;
  fotoPrincipal: string;

  constructor() {
    
  }

  ngOnInit(){
    this.cargar();
  }

  cargar(){

    if(this.ESTitem.ESTfotos != undefined) {
      this.ESTitem.ESTfotos.forEach(foto=>{
        if(foto.FOTprincipal){
          this.fotoPrincipal = foto.FOTurl;
        }
      });
    }else{
      this.fotoPrincipal = "";
    }

     
  }
  
 
}
