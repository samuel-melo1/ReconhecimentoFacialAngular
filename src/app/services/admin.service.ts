import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pessoa} from "../pessoa.model";
import {Page} from "ngx-pagination";

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

  getPessoaList(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.baseUrl}/api/pessoa/search`);
  }


   getListagem(pageNumber: number  , pageSize: number): Observable<any> {
      const url = `${this.baseUrl}/api/pessoa/listagem?pageNumber=${pageNumber}&pageSize=${pageSize}`;
      console.log(pageNumber, pageSize);
      return this.http.get<Page[]>(url)

    }

    uploadFile(file: File,  pessoaData: any = {}) {
      const formData = new FormData();
      formData.append('file', file);

      return this.http.post(`${this.baseUrl}/api/files/uploadFile`, formData);
    }
}

