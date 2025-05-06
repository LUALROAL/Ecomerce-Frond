import { create } from "domain";
import {  CategoriesResDto } from "../../core/Models/catalog";
import { createReducer, on } from "@ngrx/store";
import { loadCategories, loadCategorySuccess, loadCategoryFailure } from './catalog.actions';

export interface CatalogState {
  categories: CategoriesResDto[] | null;
  error: any | null;
}


const initialState: CatalogState = {
  categories: [],
  error: null,
};

export const catalogReducer = createReducer(
  initialState,
  on(loadCategories, (state) => ({ ...state })),
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
