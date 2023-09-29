import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root',
})
export class CertificadosService {
  constructor(private readonly http: HttpClient) {}
  apiURL = 'https://node-apicv-service-emmannem.cloud.okteto.net/certificates';
  //http opcions

  httpOpcions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getCertificates(): Observable<any> {
    return this.http
      .get<any>(this.apiURL, this.httpOpcions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code ${error.status} Mensage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
