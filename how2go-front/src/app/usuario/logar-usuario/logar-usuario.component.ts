import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import {usuarioLogado} from  '../../shared/model/usuario_logado';

@Component({
  selector: 'app-logar-usuario',
  templateUrl: './logar-usuario.component.html',
  styleUrls: ['./logar-usuario.component.scss']
})

@Injectable({
  providedIn: 'root', // <---- Adiciona isto ao serviço
})


export class LogarUsuarioComponent implements OnInit {
  email:string;
  senha:string;
  usuario_logado = usuarioLogado;

  constructor( public dialog: MatDialog, private dialogService: DialogService, public dialogRef: MatDialogRef<DialogService>, private usuarioService: UsuarioService, private mensagemService: MensagemService) { 
    
  }

  ngOnInit(): void {
    
  }
  
  openDialogCadastroUsuario():void{
    this.dialogService.openDialogCadastroUsuario();
  }

  entrar(email: string, senha: string){
    // let logar = this.usuarioService.entrar(email, senha)
    // console.log(logar)
    // this.dialogRef.close();    

    this.usuarioService.getUsuarioPorEmail(email).subscribe(
      usuario => {   
        if(usuario) {
          if(senha==usuario.senha) {
            this.usuarioService.entrar(usuario)
            this.dialogRef.close();
          }
          else {
            this.mensagemService.snackErro('Senha incorreta');
          }
        }
        else {
          this.mensagemService.snackErro('Email inválido');
        }
      }
    )
  }
}
