import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/shared/model/postagem';
import { usuarioLogado } from 'src/app/shared/model/usuario_logado';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { PostagemService } from 'src/app/shared/services/postagem.service';

@Component({
  selector: 'app-editar-postagem',
  templateUrl: './editar-postagem.component.html',
  styleUrls: ['./editar-postagem.component.scss']
})
export class EditarPostagemComponent implements OnInit {

  nomeFotos = [''];
  postagem = new Postagem();
  fotos = new Array<string>();
  usuario = usuarioLogado;
  
  constructor(private postagemService: PostagemService, private roteador: Router, private mensagemService: MensagemService, private rotaAtual:ActivatedRoute) {
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    this.postagemService.getPostagem(Number(idParaEdicao)).subscribe(
      postagem => {this.postagem = postagem}
    );
   }

  ngOnInit(): void {
    
  }
   
  atualizarPostagem(): void {
    if(this.postagem.titulo=='' || this.postagem.descricao=='' || this.postagem.destino=='' || this.postagem.locais=='' || this.postagem.fotos==undefined) {
      this.mensagemService.snackAviso('Preencha todos os campos')
    }
    else{
      this.postagemService.atualizar(this.postagem).subscribe(
        postagem => {
          this.mensagemService.snackSucesso('Postagem editada com sucesso')
          this.roteador.navigate(['listarPostagens'])
        }
      );
    } 
  }

  uploadFotos($event:Event): void{
    let files = ($event.target as HTMLInputElement).files;
    let tamanhoFiles = files.length;
    let tamanhoNomeFotos = this.nomeFotos.length;
    
    for(let i=0;i<tamanhoNomeFotos;i++) {
      this.nomeFotos.shift()
    }
    
    for(let i=0;i<tamanhoFiles;i++) {
      this.nomeFotos.push(files[i].name)
    }
    
    this.postagem.fotos=this.postagemService.uploadFotos($event);
  }

}
