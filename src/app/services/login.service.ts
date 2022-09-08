import { Injectable } from '@angular/core';
import { user } from '../Models/User';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginURL = 'http://14.177.182.182:8081/api/Auth/signin';

  constructor(private http: HttpClient) {}

  public loginUser(user: user): Observable<any> {
    return this.http.post<user>(this.loginURL, user, httpOptions).pipe(
      tap((res) => console.log(`res ${JSON.stringify(res)}`)),
      catchError((error) => of())
    );
  }
}
