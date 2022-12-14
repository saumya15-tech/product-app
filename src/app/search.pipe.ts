import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(!args){
      return value;
    }
    return value.filter((val: { name: string; type: string })=>{
      let rVal=(val.name.toLocaleLowerCase().includes(args)) || (val.type.toLocaleLowerCase().includes(args));
      return rVal;
    })
    
  }
}
