import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

const appRoute:Routes=
[{path:'',component:HomeComponent},
  {path:'HOME',component:HomeComponent },
{path:'ABOUT',component:AboutComponent},
{path:'CONTACT',component:ContactComponent},
{path:'SERVICE',component:ServicesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
