import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Pessoa} from "../pessoa.model";
import {AdminService} from "../services/admin.service";
import {Router, ActivatedRoute} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  pessoas: Pessoa[] | undefined;
  pageNumber! : number;
  pageSize!: number;
  parametro!:  number ;
  totalPage!: number;
  selectedFile: File | undefined;
  cpf!: String;
  pessoa ?: Pessoa;

  @ViewChild("voltar",{static:false}) public voltar!: ElementRef;
  constructor(private adminService: AdminService, private router: Router,
              private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
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
  showSuccess() {
    this.toastr.success('Imagem salva com sucesso', 'Sucesso');
  }

  showError(){
    this.toastr.error("Falha ao cadastrar imagem", "ERROR")
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
  onFileSelected(event: any, cpf: string): void {
    this.selectedFile = event.target.files[0];
    this.cpf = cpf;
     this.onSave();
  }

  tirarFoto(cpf: string) {
    this.adminService.tirarFoto(cpf).subscribe(
      (response) => {
        this.toastr.success('Foto tirada com sucesso', 'Sucesso');
      },
      (error) => {
        this.toastr.error("Falha ao tirar foto", "ERROR")
      }
    );
  }

  onSave(): void {
    if (this.selectedFile) {
      // Envie o arquivo para o backend
      this.adminService.uploadFile(this.selectedFile, this.cpf).subscribe(
        (response) => {
          this.showSuccess();
        },
        (error) => {
          console.log(error)
        }
      );
    }
  }
}
