import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CriarPostagemComponent } from './criar-postagem/criar-postagem.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListarPostagemComponent } from './listar-postagem/listar-postagem.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { AbrirImagemComponent } from './abrir-imagem/abrir-imagem.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import { EditarPostagemComponent } from './editar-postagem/editar-postagem.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    CriarPostagemComponent,
    ListarPostagemComponent,
    AbrirImagemComponent,
    EditarPostagemComponent,
  ],
  exports: [
    CriarPostagemComponent,
    ListarPostagemComponent,
    EditarPostagemComponent
  ],

  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    MatBadgeModule,
    MatTabsModule,
    CarouselModule.forRoot(),
  ]
})
export class PostagemModule { }
