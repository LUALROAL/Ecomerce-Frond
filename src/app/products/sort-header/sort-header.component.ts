import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-sort-header',
  standalone: false,
  templateUrl: './sort-header.component.html',
  styleUrl: './sort-header.component.css'
})
export class SortHeaderComponent {

  readonly showOptions: number[] = [10, 20, 30, 50, 100];
  readonly sortOptions: string[] = ['Destacados', 'De menor a mayor precio', 'De mayor a menor precio', 'Calificación', 'Más reciente'];

  @Input() itemsToShow: number = 10;
  @Input() sortBy: string = 'Featured';

  @Output() sortHeaderChanges = new EventEmitter<any>();

  itemsToShowChange(obj: MatSelectChange) {
    this.itemsToShow = obj.value;
    this.applyChanges();
  }

  sortByChange(obj: MatSelectChange) {
    this.sortBy = obj.value;
    this.applyChanges();
  }

  applyChanges() {
    const sortFilter = {
      itemsToShow: this.itemsToShow,
      sortBy: this.sortBy,
    };

    this.sortHeaderChanges.emit(sortFilter);
  }


}
