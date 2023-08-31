import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memory'
})
export class MemoryPipe implements PipeTransform {

  transform(value: string): string {
    return value + ' GB';
  }

}
