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
  selectedFile: File | undefined;

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

  onFileUpload(): void {
    if (this.selectedFile) {
      this.adminService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          console.log('Arquivo enviado com sucesso', response);
          // Faça algo com a resposta do backend, se necessário
        },
        (error) => {
          console.error('Erro ao enviar arquivo', error);
        }
      );
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSave(): void {
    if (this.selectedFile) {
      // Envie o arquivo para o backend
      this.adminService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          console.log('Arquivo enviado com sucesso', response);
          // Após o envio bem-sucedido do arquivo, você pode agora salvar os registros
          // Suponha que você já tenha os registros em `this.records`
          // Envie os registros para o backend aqui
          this.saveRecordsToBackend();
        },
        (error) => {
          console.error('Erro ao enviar arquivo', error);
        }
      );
    } else {
      // Se não houver arquivo selecionado, apenas salve os registros
      this.saveRecordsToBackend();
    }
  }

  saveRecordsToBackend(): void {
    this.adminService.registerPessoa(this.pessoaData).subscribe((result: any) => this.gotoDashboard());
  }

}
