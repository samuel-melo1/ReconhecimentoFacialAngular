import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
=======

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';


>>>>>>> d1153313d67619a9e92b7b3d0fa63bf5fb41dbf5
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import { HomePageComponent } from './home-page/home-page.component';
<<<<<<< HEAD
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
    { path: 'home', component: HomePageComponent },
    { path: '', component: RegisterComponent }
  ]

=======
>>>>>>> d1153313d67619a9e92b7b3d0fa63bf5fb41dbf5
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FaceRecognitionComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  exports: [RouterModule],
=======
    HttpClientModule,
    FormsModule,
  ],
>>>>>>> d1153313d67619a9e92b7b3d0fa63bf5fb41dbf5
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
