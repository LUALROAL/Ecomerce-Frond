import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 pageIndex!:number;
 display(pageIndex:number){
  this.pageIndex=pageIndex;
  console.log(this.pageIndex);
  }
  filters!:object;
  filterChange(filters:object){
    console.log(filters);
    this.filters=filters;
  }

  sortFilters!:object;
  sortFilterChange(filters:object){
    console.log(filters);
    this.sortFilters=filters;
  }
}
