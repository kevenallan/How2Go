import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Postagem } from 'src/app/shared/model/postagem';
import { Usuario } from 'src/app/shared/model/usuario';
import { usuarioLogado } from 'src/app/shared/model/usuario_logado';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {
  usuario=new Usuario();
  senha1:string;
  senha2:string;
  file = '';
  usuario_logado = usuarioLogado;

  constructor(private usuarioService: UsuarioService, public dialogRef: MatDialogRef<DialogService>, private mensagemService: MensagemService) { 

  }

  ngOnInit(): void {
  }

  uploadFoto($event:Event) {
    let files = ($event.target as HTMLInputElement).files;
    this.file = files[0].name
    this.usuarioService.uploadFoto($event).subscribe(
      foto=> this.usuario.foto= foto 
    );
  }

  cadastrarUsuario(){
    if(this.usuario.nome==undefined || this.usuario.email==undefined || this.senha1==undefined || this.senha2=='') {
      this.mensagemService.snackAviso('Preencha todos os campos');
    }   
    else{
      this.usuario.nome = this.usuario.nome.toLowerCase();
      let usuarioEmail: Usuario;
      this.usuarioService.getUsuarioPorEmail(this.usuario.email).subscribe(
        usuario => {
          usuarioEmail = usuario
          if(usuarioEmail) {
            this.mensagemService.snackErro('Email ja cadastrado. Tente novamente')
          }
          else if (this.senha1===this.senha2){
            this.usuario.senha = this.senha1;
            this.usuario.postagens = new Array<Postagem>();
            this.usuarioService.cadastrar(this.usuario).subscribe(
               usuario => {let id = usuario.idUsuario.toString(); localStorage.setItem("id", id); this.usuarioService.entrar(usuario)}
            );
            this.dialogRef.close();  
            this.usuario=new Usuario();
          }
          else{
            this.mensagemService.snackErro('As senhas não são iguais. Tente novamente.')
          }
        }

      );
      
    }
  }
}
