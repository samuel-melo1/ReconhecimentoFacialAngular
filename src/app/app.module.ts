import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {RouterModule, Routes} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatPaginatorModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
