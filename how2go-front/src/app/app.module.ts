import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {MatButtonModule} from '@angular/material/button';
import {PostagemModule } from './postagem/postagem.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioModule } from './usuario/usuario.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { InterceptadorModule } from './interceptador/interceptador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,    
    MatButtonModule,
    PostagemModule,
    HttpClientModule,
    UsuarioModule,
    MatSnackBarModule,
    InterceptadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
