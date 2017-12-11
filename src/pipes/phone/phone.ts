import { Pipe, PipeTransform } from '@angular/core';
import { format, ParsedNumber, asYouType, TelephoneNumber } from 'libphonenumber-js';
/**
 * Generated class for the PhonePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: TelephoneNumber, args?: string): any {
    
    var cambio = new asYouType('US').input(value.toString())
    console.log(cambio);
    return cambio;
    // if (!value) {
    //   return value;
    // }
    //return format(value, 'National');
  }
}
