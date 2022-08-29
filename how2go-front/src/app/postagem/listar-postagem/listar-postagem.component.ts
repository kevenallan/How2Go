import { Component, OnInit } from '@angular/core';
import {Postagem} from '../../shared/model/postagem';
import {MatDialog} from '@angular/material/dialog';
import {DialogService} from '../../shared/services/dialog.service';
import { POSTAGENS_LISTAR } from 'src/app/shared/model/postagens_listar';
import {usuarioLogado} from '../../shared/model/usuario_logado';
import { PostagemService } from 'src/app/shared/services/postagem.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.scss']
})
export class ListarPostagemComponent implements OnInit {

  postagens = POSTAGENS_LISTAR;
  usuario_logado = usuarioLogado;
  comentarios = '';
  
  constructor(private postagemService: PostagemService, public dialog: MatDialog, private dialogService: DialogService, private roteador: Router, private rotaAtual:ActivatedRoute) { 
    
  }

  ngOnInit(): void {  
   let id = this.rotaAtual.snapshot.paramMap.get('idUsuario');
   if(id) {
    this.postagemService.listarPostagensUsuario(Number(id)).subscribe(
      postagens => {
        let tamanho = this.postagens.length;
        for(let p=0; p<tamanho; p++) {
          this.postagens.shift();
        }
        for(let post of postagens){        
          this.postagens.push(post)
        }
      }
    );
   
   }
   else{
    this.postagemService.listar().subscribe(
      postagens =>{
       let tamanho = this.postagens.length;
        for(let p=0; p<tamanho; p++) {
          this.postagens.shift();
        }
        for(let post of postagens){        
          this.postagens.push(post)
        }
        if(this.usuario_logado[0].email==undefined) {
          this.dialogService.openDialogLoginUsuario();
        } 
      }     
    );
   } 
  }

  editar(postagem: Postagem): void {
    this.roteador.navigate(['editarPostagem/', postagem.idPostagem])
  }

  openDialogAbrirImagem(postagem: Postagem): void {
    this.dialogService.openDialogAbrirImagem(postagem);
  }

  inserirComentario(postagem:Postagem,comentario:string):void{    
    if(this.usuario_logado[0].idUsuario!=undefined) {
      this.postagemService.inserirComentario(postagem,comentario).subscribe(
       () => undefined
      ); 
      this.comentarios = ''
    }    
  }

  removerComentario(postagem: Postagem, index: number): void {
    postagem.comentarios.splice(index, 2);
    this.postagemService.atualizar(postagem).subscribe(
      () => undefined
    );
  }

  clickLike(postagem: Postagem): void { 
    this.postagemService.clickLike(postagem).subscribe(
      ()=> undefined
    );
  }


  filtrar(value: string): void {
    let posts: Postagem[]
    posts = []
    this.postagemService.listar().subscribe(
      postagens=>{
        for (let post of postagens){
          if(post.destino.toLowerCase().includes(value)) {
            posts.push(post)
          }
        }
        this.postagens = posts
      } 
    )
  }

  remover(postagem: Postagem): void {
    this.postagemService.remover(postagem.idPostagem).subscribe(
      ()=>{
        const indxPostagemARemover = this.postagens.findIndex(p => p.idPostagem === postagem.idPostagem)
        if (indxPostagemARemover > -1) {
          this.postagens.splice(indxPostagemARemover, 1);
        }
      }
    )
  }

  abrirDialogLogin():void {
    this.dialogService.openDialogLoginUsuario();
  }
  
}
