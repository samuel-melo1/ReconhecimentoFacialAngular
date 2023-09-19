import { Component } from '@angular/core';
import {Pessoa} from "../pessoa.model";
import {AdminService} from "../services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  pessoas: Pessoa[] | undefined;

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit(): void {
    this.getPessoa();
  }

  private getPessoa() {
    this.adminService.getPessoaList().subscribe(data => {
      this.pessoas = data;
    });
  }

}
