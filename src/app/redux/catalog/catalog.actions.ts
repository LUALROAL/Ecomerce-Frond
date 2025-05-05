import { createAction, props } from '@ngrx/store';
import { CategoriesResDto } from '../../core/Models/catalog';


export const loadCategory = createAction('[category] Cargando Categoriás' );

export const loadCategorySuccess = createAction(
  '[category] Carga De Categorías Exitoso',
  props<{ categories: CategoriesResDto[] }>()
);

export const loadCategoryFailure = createAction(
  '[category] Carga De Categoriá Fallida',
  props<{ error: any }>()
);
