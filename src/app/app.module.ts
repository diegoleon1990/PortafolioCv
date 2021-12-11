import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { BlogComponent } from './pages/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    PortafolioComponent,
    ResumenComponent,
    BlogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
