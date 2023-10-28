import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AdminService} from "../services/admin.service";
import {LogService} from "../services/log.service";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";
import {Log} from "../models/log";
import {Page} from "../page";

@Component({
  selector: 'app-reconhecimento-facial',
  templateUrl: './reconhecimento-facial.component.html',
  styleUrls: ['./reconhecimento-facial.component.css'],
  providers: [DatePipe]
})
export class ReconhecimentoFacialComponent implements OnInit {
  nomeImagemReconhecida: string | null = null;
  logData: { id_log: number, pessoa: { nome: string }, data_log: string }[] = [];
  page = 0;
  size = 10;
  totalPages!: number;
  logs: { id_log: number; pessoa: { nome: string }; data_log: string }[] = [];


  constructor(
    private http: HttpClient,
    private adminService: AdminService,
    private logService: LogService,
    private datePipe: DatePipe,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.adminService.iniciarReconhecimentoPeriodico(3000);
    this.logService.getLogsByPage(this.page, this.size).subscribe((data) => {
      this.logData = data.content;
      this.totalPages = data.totalPages;
      this.formatarData();
    });
  }

  proximaPagina(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.logService.getLogsByPage(this.page, this.size).subscribe((data) => {
        this.logData = data.content;
        this.formatarData();
        this.displayLogs(); // Mostrar logs da próxima página
      });
    }
  }
  displayLogs(): void {
    this.logs = this.logData;
  }
  paginaAnterior(): void {
    if (this.page > 1) {
      this.page--;
      this.logService.getLogsByPage(this.page, this.size).subscribe((data) => {
        this.logData = data.content;
        this.formatarData();
        this.displayLogs(); // Mostrar logs da página anterior
      });
    }
  }

  formatarData() {
    if (this.logData) {
      this.logData.forEach((entry: any) => {
        // Extraia os valores de data do array
        const year = entry.data_log[0];
        const month = entry.data_log[1];
        const day = entry.data_log[2];
        const hour = entry.data_log[3];
        const minute = entry.data_log[4];
        const second = entry.data_log[5];

        // Crie uma string de data no formato desejado
        const formattedDate = `${year}-${this.adicionarZero(month)}-${this.adicionarZero(day)} ` +
          `${this.adicionarZero(hour)}:${this.adicionarZero(minute)}:${this.adicionarZero(second)}`;

        // Atribua a data formatada de volta à entrada
        entry.data_log = formattedDate;
      });
    }
  }

  adicionarZero(value: number) {
    return value < 10 ? `0${value}` : `${value}`;
  }
  returnInicial() {
    this.router.navigate(['home']);
  }

}
