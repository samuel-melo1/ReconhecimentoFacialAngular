import { Component } from '@angular/core';
import {AdminService} from "../services/admin.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  pessoaData: any = {} ;

  constructor(private adminService: AdminService) {
  }

  registerPessoa(pessoaData: any) {
    this.adminService.registerPessoa(pessoaData)
      .subscribe(
        response => {
          console.log('Registration successful', response);
          alert('Registro salvo com sucesso!');
        },
        error => {
          console.log('Registration failed', error);
        }
      );
  }

}
