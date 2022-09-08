import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BundleCategory } from '../Models/BundleCategory';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class BundleCategoryService {
  private bundleCategoryURL = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) {}
  public getBundleCategory(): Observable<BundleCategory[]> {
    return this.http.get<BundleCategory[]>(this.bundleCategoryURL).pipe(
      tap((res) => console.log(`res ${JSON.stringify(res)}`)),
      catchError((error) => of())
    );
  }
}
