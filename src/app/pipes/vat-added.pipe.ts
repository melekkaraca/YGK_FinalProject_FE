import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
//unknown:bilinmeyen anlamında
//transform(value: unknown, ...args: unknown[]): unknown { ilk hali
//datanın veri tipi, değişken, dönüş veri tipi,
  transform(value: number, rate:number): number {
    return value + (value*rate/100);
  }

}
