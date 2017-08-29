import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../model/product'

@Pipe({
  name: 'sortproduct',
})
export class SortproductPipe implements PipeTransform {

  transform(products: Product[], prop: string): any {
    return products.sort((a, b) => a[prop] - b[prop]) ;
  }

}
