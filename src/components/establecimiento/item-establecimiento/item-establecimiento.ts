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
    this.obtenerMenorPrecio();
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
  
  obtenerMenorPrecio(){
    if(this.ESTitem.ESThabitacionesTipos != undefined) {
      this.ESTitem.ESThabitacionesTipos.forEach( tipo => {        
        if( this.ESTitem.ESTvalorMin <= 0){
            this.ESTitem.ESTvalorMin = tipo.HTItarifaEstandar   
        }
        else{
            this.ESTitem.ESTvalorMin = ( tipo.HTItarifaEstandar <= this.ESTitem.ESTvalorMin) ? tipo.HTItarifaEstandar : this.ESTitem.ESTvalorMin;
        }              
      });
    }
    else {
      this.ESTitem.ESTvalorMin = 0;
    }
    
  }
 
}
