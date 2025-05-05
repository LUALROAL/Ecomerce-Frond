
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { loadCategory, loadCategorySuccess, loadCategoryFailure } from "./catalog.actions";
import { CatalogService } from "../../core/Services/catalog.service";



@Injectable()
export class CatalogEffects {

 loadCategory$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadCategory),
    mergeMap(() => this.catalogService.getCategories()
      .pipe(
        map((categories) => loadCategorySuccess({ categories })),
        catchError((error) => of(loadCategoryFailure({ error })))
      )
    ))
  );


  constructor(
    private actions$: Actions,
    private catalogService: CatalogService
  ) { }
}
