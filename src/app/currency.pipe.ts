import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currency: 'eur' | 'usd'): string {
    switch (currency) {
      case 'usd': {
        return `$ ${value}`;
      }
      case 'eur': {
        return `€ ${value}`;
      }
    }
  }
}
