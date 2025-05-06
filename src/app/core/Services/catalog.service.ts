import { CategoriesResDto } from './../Models/catalog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDto } from '../Models/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http:HttpClient) {
  }

  getCategories() {
    return this.http.get<ResponseDto<CategoriesResDto[]>>('Catalog/category/getall');
  }


}
