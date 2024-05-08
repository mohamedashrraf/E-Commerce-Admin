import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginationParams, Products } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) {}

getProducts = (url: string, params: PaginationParams): Observable<Products> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

}
