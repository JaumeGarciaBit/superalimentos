import { Pipe, PipeTransform } from '@angular/core';
import { FoodClass } from '../food-class';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform
{

  transform(objectArray: Array<FoodClass>, filter:string): Array<FoodClass>
  {
    let l_filterArray = objectArray.filter((e) => (Object.values(e)[0].toLowerCase().includes(filter.toLowerCase())));

    return l_filterArray;
  }
}
