import { create } from "domain";
import { CatalogResDto } from "../../core/Models/catalog";
import { createReducer, on } from "@ngrx/store";
import { loadCategory, loadCategorySuccess, loadCategoryFailure } from './catalog.actions';

export interface CatalogState {
  categories: CatalogResDto[] | null;
  error: any | null;
}


const initialState: CatalogState = {
  categories: [],
  error: null,
};

export const catalogReducer = createReducer(
  initialState,
  on(loadCategory, (state) => ({ ...state })),
  on(loadCategorySuccess, (state, { categories }) => ({
    ...state,
    categories,
    error: null,
  })),
  on(loadCategoryFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
