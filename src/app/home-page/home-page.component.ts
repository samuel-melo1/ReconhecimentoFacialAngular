import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Pessoa} from "../pessoa.model";
import {AdminService} from "../services/admin.service";
import {Router, ActivatedRoute} from "@angular/router";

import { data } from 'jquery';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import {Page} from "ngx-pagination";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  pessoas: Pessoa[] | undefined;
  pageNumber! : number;
  pageSize!: number;
  parametro!:  number ;
  totalPage!: number;

  @ViewChild("voltar",{static:false}) public voltar!: ElementRef;
  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
     this.activatedRoute.queryParams
    .subscribe(params => {
          this.pageNumber = parseInt(params['pageNumber'])||0;
          this.pageSize  = parseInt(params['pageSize'])||10;

});

    this.pageList(this.pageNumber,this.pageSize);
  }

  private getPessoa() {
    this.adminService.getPessoaList().subscribe(data => {
      this.pessoas = data;
    });
  }


pageList(pageNumber: number,pageSize: number){
  this.adminService.getListagem(pageNumber,pageSize).subscribe(res => {
    this.pessoas = res["content"];
    this.totalPage = res["totalPages"];

  })
}
  returnInicial() {
    this.router.navigate(['home']);

  }


}
