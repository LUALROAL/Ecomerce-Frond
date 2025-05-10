import { Store } from '@ngrx/store';
import { AppState, store } from './redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CategoriesResDto } from './core/Models/catalog';
import { loadCategories } from './redux/catalog/catalog.actions';
import { selectCategories } from './redux/catalog/catalog.selectot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';
  categories$:Observable<CategoriesResDto[] | null>;
  constructor(private store: Store<AppState>) {
    this.categories$ = this.store.select(selectCategories);

  }

  ngOnInit(): void {
    this.categories$.pipe(
      tap((categories) => {
        if(categories?.length === 0) {
          this.store.dispatch(loadCategories());
        }
      })
    ).subscribe();
}
}
