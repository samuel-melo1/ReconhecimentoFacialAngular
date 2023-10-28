import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, interval, startWith, switchMap} from 'rxjs';

import {Page} from "../page";
import {Log} from "../models/log";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/api/log/exibirLog';
  private baseUrlJ = 'http://localhost:8080';
  getLogData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getLogDataWithInterval(): Observable<any> {
    return interval(5000).pipe(
      startWith(0), // Inicie imediatamente
      switchMap(() => this.getLogData())
    );
  }
  getLogsByPage(page: number, size: number): Observable<Page<Log>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Page<Log>>(`${this.baseUrlJ}/api/log/exibirLogPaginado`, { params });
  }

}
