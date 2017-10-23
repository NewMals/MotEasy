import { Component, Input } from '@angular/core';
import { DTOEstablecimiento } from "../../../modelos/DTOEstablecimiento";
import { NavParams } from "ionic-angular";
/**
 * Generated class for the ViewEstablecimientoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'view-establecimiento',
  templateUrl: 'view-establecimiento.html'
})
export class ViewEstablecimientoComponent {

  text: string;
  @Input() ESTview : DTOEstablecimiento;
  favorito : Boolean = false;

  constructor(public navParams: NavParams) {
    console.log('Hello ViewEstablecimientoComponent Component');
  }

  ejemploSlide: any = [
    { id: 1 , PIC: "https://candela-500700.c.cdn77.org/wp-content/uploads/2016/10/images_2016_09_10_motel0.jpg" }
    , { id: 1 ,PIC: "http://www.latinstorehouse.com/wp-content/uploads/2017/05/MOTEL-CRUCERO-AZUL-BOG-5.jpg" }
    , { id: 1 , PIC: "https://theflamingomotel.com/wp-content/uploads/header_images/060e77d2b75888b9d9254e4fd51961a4.jpg"}
    , { id: 1 , PIC: "https://t-ec.bstatic.com/images/hotel/max1024x768/886/88670590.jpg" }
    , { id: 2 , PIC: "http://www.buscadordemoteles.cl/plugimg/img/logos/94.tropicalpark.d3b0c7x960.jpg" }
    , { id: 2 , PIC: "https://media-cdn.tripadvisor.com/media/photo-s/0d/3b/c0/14/suite-con-jacuzzi-y-hamaca.jpg" }
    , { id: 2 , PIC: "https://www.hoteleskinky.com/img/hotel/v-motel-boutique-viaducto/hoteleskinky/v-motel-boutique-viaducto.jpg" }
    , { id: 2 , PIC: "https://res.cloudinary.com/civico/image/upload/c_fit,f_auto,fl_lossy,h_1200,q_auto,w_1200/v1418744284/entity/image/file/001/000/549051db1790bc4c13000001.jpg" }
    , { id: 2 , PIC: "http://frenchysoasismotel.com/wp-content/uploads/2011/06/1-night-view-front.jpg" }
    , { id: 3 , PIC: "http://www.motelrocamar.com/wp-content/uploads/2017/08/motel-rocamar-guimot-dsc_0370editada-2-001-1.jpg" }
    , { id: 3 , PIC: "https://0.kekantoimg.com/MJy2NRVLQzgBrhaGoObCrB8ZkC8=/fit-in/600x600/s3.amazonaws.com/kekanto_pics/pics/588/603588.jpg" }
    , { id: 3 , PIC: "https://cf.jare.io/?u=https://www.guimot.com/wp-content/uploads/2017/01/Motel-Nuevo-Chalet-1024x600.jpg" }
    , { id: 3 , PIC: "http://motelnow.com.mx/wp-content/uploads/2014/11/v-motel-boutique-por-dentro-1024x681.jpg" }
    , { id: 3 , PIC: "https://s-ec.bstatic.com/images/hotel/max1024x768/469/46961945.jpg" }
    , { id: 3 , PIC: "http://2.bp.blogspot.com/-E5Yf3ij2unA/UnkDMxQkPFI/AAAAAAAAAok/6GLZRHCeqm8/s1600/bates-motel.jpeg" }

    
  ];

  modFavorito(){
    if(this.favorito){
      this.favorito = false;
    }else {
      this.favorito = true;
    }
  }
}
