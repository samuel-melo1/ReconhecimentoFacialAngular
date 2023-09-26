import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule, Routes} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PaginationComponent } from './pagination/pagination.component';
  
import { DataTablesModule } from 'angular-datatables';

const routes : Routes = [
    { path: 'home', component: HomePageComponent },
    { path: '', component: RegisterComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FaceRecognitionComponent,
    HomePageComponent,
    PaginationComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    DataTablesModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
