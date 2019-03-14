import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class PipesPipe implements PipeTransform {

  transform(items: any[], field: string): any[] {
    let filteredData: any = [];
    if (!items) {
      return [];
    }
    field = field.toLowerCase();
     items.filter((data) => {
      data = data.toLowerCase();
       if (data.includes(field)) {
         filteredData.push(data);
       }
    });
     return filteredData;
  }

}
