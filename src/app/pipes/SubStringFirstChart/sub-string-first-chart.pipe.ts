import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subStringFirstChart'
})
export class SubStringFirstChartPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value) return '';
    return value.toString().charAt(0).toUpperCase()+'.'
  }

}
