import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded',
  standalone: true
})
export class VatAddedPipe implements PipeTransform {
//         unitprice       %10          dönüş tipim 
  transform(value: number, rate:number): number {
    return value + (value*rate/100);
  }

}
