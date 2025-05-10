
import { inject, Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { CatalogService } from "../../core/Services/catalog.service";
import { loadCategories, loadCategoryFailure, loadCategorySuccess } from "./catalog.actions";





@Injectable()
export class CatalogEffects {
  private actions$ = inject(Actions);
  private catalogService = inject(CatalogService);
  // constructor(
  //   private actions$: Actions,
  //   private catalogService: CatalogService
  // ) { }

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      mergeMap(() =>
        this.catalogService.getCategories().pipe(
          map((res) => {
            console.log(res);
             console.log(res.data);
            return res.isSuccessed === true
              ? loadCategorySuccess({ categories: res.data ? res.data : [] })
              : loadCategoryFailure({ error: res.message });
          }),
          catchError((error) => of(loadCategoryFailure({ error })))
        )
      )
    )
  );
}
