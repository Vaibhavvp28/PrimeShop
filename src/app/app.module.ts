import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Main2Component } from './main2/main2.component';
import { RouterModule } from '@angular/router';
import { AsusComponent } from './main/asus/asus.component';
import { EarphoneComponent } from './main/earphone/earphone.component';
import { TvComponent } from './main/tv/tv.component';
import { TrimmerComponent } from './main/trimmer/trimmer.component';
import { ContactusComponent } from './contactus/contactus.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    ContactUsComponent,
    Main2Component,
    AsusComponent,
    EarphoneComponent,
    TvComponent,
    TrimmerComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
