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
  private baseUrlPy = 'http://localhost:5000';
  nomeImagemReconhecida: string | null = null;
  registerPessoa(pessoa:any): Observable<any>{
    const url = `${this.baseUrl}/api/pessoa/create`;
    return this.http.post(url,pessoa);
  }
  getPessoaList(): Observable<Pessoa[]> {

    return this.http.get<Pessoa[]>(`${this.baseUrl}/api/pessoa/search`);
  }
   getListagem(pageNumber: number  , pageSize: number): Observable<any> {
      const url = `${this.baseUrl}/api/pessoa/listagem?pageNumber=${pageNumber}&pageSize=${pageSize}`;
      return this.http.get<Page[]>(url)

  }
  tirarFoto(cpf: string): Observable<any> {
    const url = `${this.baseUrlPy}/api/pessoa/tirar_foto`;
    const data = { cpf: cpf };

    return this.http.post(url, data);
  }
  reconhecimentoFacial(): Observable<any> {
    const url = `${this.baseUrlPy}/api/pessoa/reconhecimento_facial`;
    return this.http.post(url, {});
  }

  iniciarReconhecimentoPeriodico(intervalo: number) {
    setInterval(() => {
      this.reconhecimentoFacial().subscribe(
        (response: any) => {
          if (response.nome_foto) {
            this.nomeImagemReconhecida = response.nome_foto;
          }
          console.log(response);
        },
        (error) => {
          console.error('Erro ao realizar reconhecimento facial', error);
        }
      );
    }, intervalo);
  }

  uploadFile(file: File, cpf: String) {
      const formData = new FormData();
      formData.append('file', file);
      console.log(cpf)
      return this.http.post(`${this.baseUrl}/api/files/uploadFile/${cpf}`, formData);
    }
}

