import { NgModule } from '@angular/core';
import { PhonePipe } from './phone/phone';

@NgModule({
	declarations: [PhonePipe],
	imports: [],
	exports: [PhonePipe],
	providers:[PhonePipe]

})
export class PipesModule {

}
