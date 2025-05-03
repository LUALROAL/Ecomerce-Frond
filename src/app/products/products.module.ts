import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from '../shared/shared.module';
import { FiltersComponent } from './filters/filters.component';
import { MatSliderModule } from '@angular/material/slider';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ProductsComponent,
    PaginacionComponent,
    FiltersComponent,
    SortHeaderComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatIconModule,
    MatIcon,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSliderModule,
    SharedModule,
    MatSelectModule,
  ]
})
export class ProductsModule { }
