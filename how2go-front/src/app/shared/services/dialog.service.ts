import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AbrirImagemComponent } from 'src/app/postagem/abrir-imagem/abrir-imagem.component';
import { CadastrarUsuarioComponent } from 'src/app/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { LogarUsuarioComponent } from 'src/app/usuario/logar-usuario/logar-usuario.component';
import { Postagem } from '../model/postagem';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialogAbrirImagem(postagem: Postagem): void {
    this.dialog.open(AbrirImagemComponent, {
      width: '1000px', height: '500px',
      data: {
        postagem
      }
    });
  }

  openDialogLoginUsuario():void{
    this.dialog.open(LogarUsuarioComponent,{
      width: '600px', height: '425px'
    })
  }

  openDialogCadastroUsuario():void{
    this.dialog.open(CadastrarUsuarioComponent,{
      width: '800px', height: '620px'
    })
  }

}
