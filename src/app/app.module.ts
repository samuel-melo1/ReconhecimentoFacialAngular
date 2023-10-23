import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule, Routes} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
import { InicialPageComponent } from './inicial-page/inicial-page.component';
import { ReconhecimentoFacialComponent } from './reconhecimento-facial/reconhecimento-facial.component';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';

const routes : Routes = [
    { path: 'listagem', component: HomePageComponent },
    { path: '', component: RegisterComponent },
    { path: 'home', component: InicialPageComponent },
    { path: 'reconhecimento-facial', component: ReconhecimentoFacialComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    InicialPageComponent,
    ReconhecimentoFacialComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DataTablesModule,
    CommonModule,
    NgChartsModule,
    NgxPaginationModule,

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
