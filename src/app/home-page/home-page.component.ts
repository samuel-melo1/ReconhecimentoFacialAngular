import { Component } from '@angular/core';
import { Pessoa } from '../pessoa.model';
import { AdminService } from '../services/admin.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  pessoas!: Pessoa[];
  totalElements: number = 0;
  pageSize: number = 10; // Tamanho padrão da página
  pageNumber: number = 0; // Página inicial

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getPage();
  }

    private getPage() {
        this.adminService.getAll(this.pageNumber, this.pageSize).subscribe((data: any) => {
            this.pessoas = data;
            this.totalElements = data.length; // Defina o total de elementos como o tamanho do array de pessoas
        });
    }
    changePageSize(event: Event) {
        const target = event.target as HTMLSelectElement;
        const newSize = parseInt(target.value, 10);

        // Calcule a nova página com base na nova quantidade de registros por página
        const newPage = Math.floor((this.pageNumber * this.pageSize) / newSize);

        this.pageSize = newSize;
        this.pageNumber = newPage;
        this.getPage();
    }
}
