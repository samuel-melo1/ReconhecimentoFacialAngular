import { Component } from '@angular/core';
import {AdminService} from "../services/admin.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  pessoaData: any = {} ;

  router: Router;

  constructor(private adminService: AdminService, router: Router) {
    this.router = router;
  }

  registerPessoa(pessoaData: any) {
    this.adminService.registerPessoa(pessoaData)
      .subscribe(
        response => {
          console.log('Registration successful', response);
          alert('Registro salvo com sucesso!');
          this.router.navigate(['/home', '']);
        },
        error => {
          console.log('Registration failed', error);
        }
      );
  }

}
