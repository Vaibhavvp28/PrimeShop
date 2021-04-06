import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AsusComponent } from './main/asus/asus.component';
import { EarphoneComponent } from './main/earphone/earphone.component';
import { TrimmerComponent } from './main/trimmer/trimmer.component';
import { TvComponent } from './main/tv/tv.component';
import { Main2Component } from './main2/main2.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contactus', component: Main2Component},
  {path: 'asus', component: AsusComponent},
  {path: 'earphone', component: EarphoneComponent},
  {path: 'tv', component: TvComponent},
  {path: 'trimmer', component: TrimmerComponent},
  {path: 'contact-us', component: ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
