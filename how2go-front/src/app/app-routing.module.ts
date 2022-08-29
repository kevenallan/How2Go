import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPostagemComponent } from './postagem/criar-postagem/criar-postagem.component';
import { EditarPostagemComponent } from './postagem/editar-postagem/editar-postagem.component';
import { ListarPostagemComponent } from './postagem/listar-postagem/listar-postagem.component';
import {CadastrarUsuarioComponent} from './usuario/cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: ListarPostagemComponent
  },
  {
    path: 'listarPostagens',
    component: ListarPostagemComponent
  },
  {
    path: 'minhasPostagens/:idUsuario',
    component: ListarPostagemComponent
  },
  {
    path: 'criarPostagem',
    component: CriarPostagemComponent
  },
  {
    path: 'editarPostagem/:id',
    component: EditarPostagemComponent
  },
  {
    path: 'cadastrarUsuario',
    component: CadastrarUsuarioComponent
  },
  {
    path: 'listarUsuario',
    component: ListarPostagemComponent
  },
  {
    path: 'editarPerfil/:id',
    component: EditarUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
