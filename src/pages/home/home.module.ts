import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";
import { ComponentsModule } from "../../components/components.module";
import { EstablecimientoProvider } from "../../providers/establecimiento/establecimientoService";

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        ComponentsModule
    ],
    exports: [
        HomePage
    ],
    providers:[
        //AngularFirestore,
        EstablecimientoProvider
    ]
})
export class HomeModule {}