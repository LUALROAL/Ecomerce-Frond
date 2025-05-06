
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { CatalogService } from "../../core/Services/catalog.service";
import { loadCategory, loadCategoryFailure, loadCategorySuccess } from "./catalog.actions";





@Injectable()
export class CatalogEffects {
  constructor(
    private actions$: Actions,
    private catalogService: CatalogService
  ) {}

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategory),
      mergeMap(() =>
        this.catalogService.getCategories().pipe(
          map((res) => {
            return res.isSuccess === true
              ? loadCategorySuccess({ categories: res.data ? res.data : [] })
              : loadCategoryFailure({ error: res.message });
          }),
          catchError((error) => of(loadCategoryFailure({ error })))
        )
      )
    )
  );
}
