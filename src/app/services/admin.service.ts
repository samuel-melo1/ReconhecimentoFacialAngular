import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080';
  registerPessoa(pessoa:any): Observable<any>{
    const url = `${this.baseUrl}/api/pessoa/create`;
    return this.http.post(url,pessoa);
  }
}
