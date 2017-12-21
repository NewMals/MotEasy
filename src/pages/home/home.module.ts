import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";
import { ComponentsModule } from "../../components/components.module";
import { EstablecimientoProvider } from "../../providers/establecimiento/establecimientoService";
import { HttpModule } from "@angular/http";
import { Geolocation } from "@ionic-native/geolocation";

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        ComponentsModule
    ],
    exports: [
        HomePage,
        HttpModule
    ],
    providers:[
        //AngularFirestore,
        EstablecimientoProvider,
        Geolocation
    ]
})
export class HomeModule {}