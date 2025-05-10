import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriesResDto } from '../../core/Models/catalog';
import { AppState } from '../../redux/store';
import { selectCategories } from '../../redux/catalog/catalog.selectot';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 categories:string[]=[
  'Palmas',
  'Bonsais',
  'Pinos',
  'Plantas con flor'

 ]

   categories$:Observable<CategoriesResDto[] | null>;
   constructor(private store: Store<AppState>) {
     this.categories$ = this.store.select(selectCategories);

   }
}
