import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(values: any[], filter: any): any {

    if (!values || !values.length) return [];
    if (!filter) return values;

    filter = filter.toUpperCase();

    if (filter && Array.isArray(values)) {
      const keys = Object.keys(values[0]);

      return values.filter(
        v => v && keys.some(k => v[k].toUpperCase().indexOf(filter) >= 0)
      );
    }
  }
}
