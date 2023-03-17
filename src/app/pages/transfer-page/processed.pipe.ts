import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'processed'
})
export class ProcessedPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Processed' : 'Pending';
  }
}
