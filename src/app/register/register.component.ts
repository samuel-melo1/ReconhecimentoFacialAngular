import { Component } from '@angular/core';
import {AdminService} from "../services/admin.service";
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> d1153313d67619a9e92b7b3d0fa63bf5fb41dbf5

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  pessoaData: any = {} ;

<<<<<<< HEAD
  router: Router;

  constructor(private adminService: AdminService, router: Router) {
    this.router = router;
=======
  constructor(private adminService: AdminService) {
>>>>>>> d1153313d67619a9e92b7b3d0fa63bf5fb41dbf5
  }

  registerPessoa(pessoaData: any) {
    this.adminService.registerPessoa(pessoaData)
      .subscribe(
        response => {
          console.log('Registration successful', response);
          alert('Registro salvo com sucesso!');
<<<<<<< HEAD
          this.router.navigate(['/home', '']);
=======
>>>>>>> d1153313d67619a9e92b7b3d0fa63bf5fb41dbf5
        },
        error => {
          console.log('Registration failed', error);
        }
      );
  }

}
