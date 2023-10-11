import { Component } from '@angular/core';
import {AdminService} from "../services/admin.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  pessoaData: any = {} ;
  router: Router;


  constructor(private adminService: AdminService, router: Router, private toastr: ToastrService) {
    this.router = router;
  }

  onSubmit() {
    this.adminService.registerPessoa(this.pessoaData).subscribe((result: any) => this.gotoDashboard());
  }

  gotoDashboard() {
    this.router.navigate(['/home']);

  }
  showSuccess() {
    this.toastr.success('Pessoa cadastrada com sucesso', 'Sucesso');
  }

  registerPessoa(pessoaData: any) {
    this.adminService.registerPessoa(pessoaData)
      .subscribe(
        response => {
          this.gotoDashboard();
          this.showSuccess();
        },
        error => {
          document.getElementById("message-danger")?.classList.remove("hidden");
        }
      );
  }



}
