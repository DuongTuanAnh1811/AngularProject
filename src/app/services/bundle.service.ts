import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bundle } from '../Models/Bundle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class BundleService {
  private bundleURL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  public getBundle(): Observable<Bundle[]> {
    return this.http.get<Bundle[]>(this.bundleURL).pipe(
      tap((res) => console.log(`res ${JSON.stringify(res)}`)),
      catchError((error) => of())
    );
  }
}
