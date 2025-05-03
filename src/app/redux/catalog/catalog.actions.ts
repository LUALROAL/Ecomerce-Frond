import { createAction, props } from '@ngrx/store';
import { CatalogResDto } from '../../core/Models/catalog';


export const loadCategory = createAction('[category] Cargando Categoriás' );

export const loadCategorySuccess = createAction(
  '[category] Carga De Categorías Exitoso',
  props<{ categories: CatalogResDto[] }>()
);

export const loadCategoryFailure = createAction(
  '[category] Carga De Categorías Fallida',
  props<{ error: any }>()
);
