import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/shared/model/postagem';
import { Usuario } from 'src/app/shared/model/usuario';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  usuario = new Usuario();
  senha1:string;
  senha2:string;
  file = '';
  senhaEdit = false;

  constructor(private usuarioService: UsuarioService, private mensagemService: MensagemService, private rotaAtual:ActivatedRoute, private roteador: Router) { 
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(Number(idParaEdicao)).subscribe(
      usuario => {this.usuario = usuario}
    );
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

  editarUsuario(): void{
    this.usuario.nome = this.usuario.nome.toLowerCase();
   
    if(this.usuario.nome=='' || this.usuario.email=='') {
      this.mensagemService.snackAviso('Preencha todos os campos');  
      return null;
    } 
 
    let usuarioEmail: Usuario;
    this.usuarioService.getUsuarioPorEmail(this.usuario.email).subscribe(
      usuario => {
               usuarioEmail = usuario

               if(usuarioEmail && usuarioEmail.idUsuario!=this.usuario.idUsuario) {
                this.mensagemService.snackErro('Email ja cadastrado. Tente novamente');
               } 

               else{
                  if (this.senhaEdit){
                    if(usuario.senha==this.senha1) {
                      this.usuario.senha = this.senha2;             
                    }    
                    else if(this.senha1==undefined && this.senha2==undefined){
                      console.log(this.senhaEdit)
                      this.mensagemService.snackAviso('Preencha os campos da senha ou desabilite-os');
                      return null;
                    }
                    else {
                      this.mensagemService.snackErro('A senha antiga digitada não é a mesma');
                      return null;
                    }
                  }           
                 
                  this.usuarioService.atualizar(this.usuario).subscribe(
                    usuario => {
                      this.mensagemService.snackSucesso('Usuario editado com sucesso');
                      this.usuarioService.entrar(usuario);
                      this.roteador.navigate(['listarPostagens']);
                  }
                );
              }
                   
              }
    )
  }

  alterarSenha(): void {
    if(this.senhaEdit) {
      this.senhaEdit = false;
    }
    else {
      this.senhaEdit = true;
    }
  }

  excluirUsuario(): void {
    this.usuarioService.excluir(this.usuario.idUsuario).subscribe(
     () => {
         this.usuarioService.sair();
         this.roteador.navigate(['listarPostagens']);
        }
    );
  } 
}
