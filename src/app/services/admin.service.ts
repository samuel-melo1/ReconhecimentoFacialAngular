import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pessoa} from "../pessoa.model";




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
    getAll(pageNumber: number, pageSize: number): Observable<any> {
        const params = new HttpParams()
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString());

        return this.http.get(`${this.baseUrl}/api/pessoa/listagem`, { params });
    }


  getPessoaList(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.baseUrl}/api/pessoa/search`);
  }

}
