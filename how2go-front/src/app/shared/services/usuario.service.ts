import { Injectable } from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import { usuarioLogado } from '../model/usuario_logado';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  URL_USUARIOS="http://localhost:8080/usuarios/";
  usuario_logado= usuarioLogado;
  usuario = new Usuario();
  foto: Observable<any>;

  constructor(private httpClient : HttpClient) { 
  }

  listar(): Observable<Array<Usuario>> {
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}${id}`);
  }

  getUsuarioPorEmail(email: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}email/${email}`);
  }

  entrar(usuario: Usuario): void {   
            this.usuario_logado.shift();
            this.usuario_logado.push(usuario)
            let id = usuario.idUsuario.toString();
            localStorage.setItem("id", id);    
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    if(usuario.foto==undefined) {
      usuario.foto = '../../../assets/usuario/default.png'
    }
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);   
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_USUARIOS}atualizar-usuario`, usuario)
  }

  sair(){
    const user =  {
      idUsuario:undefined,
      email:undefined,
      senha: undefined,
      nome: undefined,
      foto: undefined,
      postagens:undefined
    }   
    this.usuario_logado.push(user)
    this.usuario_logado.shift()
    localStorage.setItem("id", "0")
  }

  excluir(id: number) {
    return this.httpClient.delete(`${this.URL_USUARIOS}${id}`);
  }

   //-----------------------------------UPLOAD FOTOS-----------------------------------
  
  uploadFoto($event:Event): Observable<any> {
    const file =($event.target as HTMLInputElement).files[0];  
    this.convertToBase64(file);
    return this.foto;
  }
  convertToBase64(file:File){
    this.foto = new Observable ((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    });
  }
  readFile(file:File, subscriber:Subscriber<any>){
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload=()=>{
      subscriber.next(filereader.result);
      subscriber.complete();
    }
    filereader.onerror=(error)=>{
      subscriber.error(error);
      subscriber.complete();
    }
  }
}