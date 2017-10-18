import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Establecimiento } from "../../modelos/Establecimiento";

@IonicPage({
  name: 'HomePage'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  //Establecimiento = new Establecimiento;
  ArrayEST : Array<Establecimiento> = new Array<Establecimiento>();

  constructor(public navCtrl: NavController) {
      this.ejemplo();

  }

  ejemplo(){
    var establecimiento = new Establecimiento();
    establecimiento.ESTid = 1;
    establecimiento.ESTnombre = 'Amarte';    
    this.ArrayEST.push(establecimiento);
  }
}
