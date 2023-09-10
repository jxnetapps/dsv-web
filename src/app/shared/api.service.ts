import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import {environment as env} from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_END_POINT: string = env.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
    responseType: 'text' as 'json',
  };

  constructor(private http: HttpClient) {}
  // Add people
  addPeople(data: any): Observable<any> {
    let API_URL = `${this.API_END_POINT}/v1/people`;
    return this.http.post(API_URL, data, this.httpOptions).pipe(catchError(this.errorMgmt));
  }
  // Get All people
  getAllPeople() {
    return this.http.get(`${this.API_END_POINT}/v1/people`);
  }
  // Get people
  getPeopleDetails(id: string): Observable<any> {
    let API_URL = `${this.API_END_POINT}/v1/people/${id}`;
    return this.http.get(API_URL).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  
  // Get All films
  getFilms() {
    return this.http.get(`${this.API_END_POINT}/v1/films`);
  }
  // Get people
  getFilmDetails(id: string): Observable<any> {
    let API_URL = `${this.API_END_POINT}/v1/films/${id}`;
    return this.http.get(API_URL).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
