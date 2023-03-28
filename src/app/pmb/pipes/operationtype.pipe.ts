import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operationtype'
})
export class OperationtypePipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Withdrawal' : 'Credit';
  }

}
