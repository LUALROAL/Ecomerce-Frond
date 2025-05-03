import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrandResDto, CategoriesResDto } from '../../core/Models/catalog';

@Component({
  selector: 'app-filters',
  standalone: false,
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
categories: CategoriesResDto[] = [
  {
    id: 1,
    name: 'Plantas de interior',
    image: null
  },
  {
    id: 2,
    name: 'Plantas de exterior',
    image: null
  },
  {
    id: 3,
    name: 'Suculentas',
    image: null
  },
  {
    id: 4,
    name: 'Plantas aromáticas',
    image: null
  },
  {
    id: 5,
    name: 'Plantas ornamentales',
    image: null
  }
  ]

brands: BrandResDto[] = [
  {
    id: 1,
    name: 'Vivero Los Pinos',
    image: null
  },
  {
    id: 2,
    name: 'Plantas del Bosque',
    image: null
  },
  {
    id: 3,
    name: 'Jardines Andinos',
    image: null
  },
  {
    id: 4,
    name: 'Orquídeas del Valle',
    image: null
  },
  {
    id: 5,
    name: 'Cultivos La Esperanza',
    image: null
  }
  ];

  _minPrice: number = 0;
 _maxPrice: number = 3000;

  ratings=[
    {value : 5, selected: false},
    {value : 4, selected: false},
    {value : 3, selected: false},
    {value : 2, selected: false},
    {value : 1, selected: false},
  ];

  @Input()selectedCategoryIds: number[] = [];
  @Input()selectedBrandIds: number[] = [];
  @Input()selectedStockType: boolean = true;
  @Input()selectedRatings: number[] = [];

  @Input()minPrice: number = 0;
  @Input()maxPrice: number = 3000;
  @Input()selectedMinPrice: number=this.minPrice;
  @Input()selectedMaxPrice: number=this.maxPrice;

  @Output() filterChange = new EventEmitter<any>();

  minPriceChange(priceData: any) {
    this.selectedMinPrice = priceData.value;
    this.applyFilters();
  }
  maxPriceChange(priceData: any) {
    this.selectedMaxPrice = priceData.value;
    this.applyFilters();
  }

  toggleRating(ratingValue: number) {
    const index = this.selectedRatings.indexOf(ratingValue);
    if (index === -1) {
      this.selectedRatings.push(ratingValue);
    } else {
      this.selectedRatings.splice(index, 1);
    }
    this.applyFilters();
  }

  toggleCategory(categoryId: number) {
    const index = this.selectedCategoryIds.indexOf(categoryId);
    if (index === -1) {
      this.selectedCategoryIds.push(categoryId);
    } else {
      this.selectedCategoryIds.splice(index, 1);
    }
    this.applyFilters();
  }

  toggleBrand(brandId: number) {
    const index = this.selectedBrandIds.indexOf(brandId);
    if (index === -1) {
      this.selectedBrandIds.push(brandId);
    } else {
      this.selectedBrandIds.splice(index, 1);
    }
    this.applyFilters();
  }

  toggleStockType(value: boolean) {
    this.selectedStockType = value;
    this.applyFilters();
  }

  applyFilters() {
    const selectFilters = {
      categoryId: this.selectedCategoryIds,
      brandId: this.selectedBrandIds,
      stockType: this.selectedStockType,
      ratings: this.selectedRatings,
      minPrice: this.selectedMinPrice,
      maxPrice: this.selectedMaxPrice
    };
    this.filterChange.emit(selectFilters);
  }
}
