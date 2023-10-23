import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../services/admin.service';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-inicial-page',
  templateUrl: './inicial-page.component.html',
  styleUrls: ['./inicial-page.component.css']
})
export class InicialPageComponent implements OnInit {
  router: Router;
  @ViewChild('meuCanvas', { static: true }) elemento: ElementRef = new ElementRef(null);
  private chart!: Chart;

  constructor(
    private adminService: AdminService,
    router: Router,
    private toastr: ToastrService,
    private logService: LogService
  ) {
    this.router = router;
  }

  ngOnInit() {
    this.loadChartData();
  }

  private loadChartData() {
    this.logService.getLogData().subscribe((logData: any[]) => {
      const weekDaysData = [0, 0, 0, 0, 0]; // Inicialize com os valores de cada dia da semana

      logData.forEach((log) => {
        const date = moment(log.data_log, 'YYYY-MM-DD HH:mm:ss'); // Analise a data no formato correto
        const dayOfWeek = date.isoWeekday();

        // Verifica se o dia da semana está na faixa de segunda a sexta-feira
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
          weekDaysData[dayOfWeek - 1] += 1; // Atualize o contador para o dia da semana correspondente
        }
      });

      this.createChart(weekDaysData);
    });
  }

  private createChart(data: number[]) {
    if (this.chart) {
      this.chart.destroy(); // Destrua o gráfico existente antes de criar um novo
    }

    this.chart = new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
        datasets: [
          {
            label: 'Logs por Dia da Semana',
            data: data,
            borderColor: '#00AEFF',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  goToList() {
    this.router.navigate(['listagem']);
  }

  goToRelario() {
    this.router.navigate(['relatorios']);
  }

  reconhecimentoFacial() {
    this.adminService.reconhecimentoFacial().subscribe(
      (response: any) => {
        this.toastr.success('Pessoa Reconhecida com sucesso', 'Sucesso');
      },
      (error: any) => {
        this.toastr.error('Pessoa Desconhecida', 'ERROR');
      }
    );
  }

  navegarParaReconhecimentoFacial() {
    this.router.navigate(['/reconhecimento-facial']);
  }
}
