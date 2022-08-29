import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { POSTAGENS_LISTAR } from 'src/app/shared/model/postagens_listar';
import {usuarioLogado} from '../../shared/model/usuario_logado';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { PostagemService } from 'src/app/shared/services/postagem.service';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { Usuario } from 'src/app/shared/model/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  usuario_logado = usuarioLogado; 
  postagens_listar = POSTAGENS_LISTAR;

  constructor(private dialogService: DialogService, private usuarioService: UsuarioService, private postagemService: PostagemService, private mensagemService: MensagemService, private roteador: Router) { }
  
  ngOnInit(): void {
    let id = localStorage.getItem("id");
    if(id!='0') {
      let id2 = parseInt(id);
      this.usuarioService.getUsuario(id2).subscribe(
        usuario => {
          if(usuario) {
            this.usuario_logado.push(usuario); 
            this.usuario_logado.shift()
          }  
          else {
            localStorage.setItem("id","0")
          }
        }
      );
    }
  }

  editarPerfil(usuario: Usuario): void {
    this.roteador.navigate(['editarPerfil/', usuario.idUsuario])
  }

  minhasPostagens(usuario: Usuario): void {
    this.roteador.navigate(['minhasPostagens/', usuario.idUsuario])
  }

  openDialogCadastroUsuario():void{
    this.dialogService.openDialogCadastroUsuario();
  }

  openDialogLoginUsuario():void{
    this.dialogService.openDialogLoginUsuario();
  }

  filtrar(value: string): void {
    if(value=='') {
      this.postagemService.listar().subscribe(
        postagens =>{
         let tamanho = this.postagens_listar.length;
          for(let p=0; p<tamanho; p++) {
            this.postagens_listar.shift();
          }
          for(let post of postagens){        
            this.postagens_listar.push(post)
          }
        }     
      );
    }
    else{
      this.postagemService.filtrar(value).subscribe(
        postagens => {
          let tamanho = this.postagens_listar.length;       
          for(let i=0; i<tamanho; i++) {
            this.postagens_listar.shift()   
          }
          for(let postagem of postagens) {
            this.postagens_listar.push(postagem) 
          } 
          if(this.postagens_listar.length==0) {   
            this.mensagemService.snackInfo('Nenhuma postagem encontrada')
          }    
        }
      );
    }  
  } 

  sair(): void {
    this.usuarioService.sair();
  }
  
  voltar(){
    window.scrollTo(0, 0);
  }
}
