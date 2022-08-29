package br.edu.ifpb.bruna.claudio.keven.how2go.controller;

import br.edu.ifpb.bruna.claudio.keven.how2go.model.Postagem;
import br.edu.ifpb.bruna.claudio.keven.how2go.service.PostagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/postagens/")
public class PostagemController {

   @Autowired
   private PostagemService postagemService;

   @GetMapping("/")
   public List<Postagem> getPostagens() {
       return this.postagemService.getPostagens();
   }

   @GetMapping("/id/{id}")
   public Postagem getPostagemPorId(@PathVariable("id") Long idPostagem) {
       return this.postagemService.getPostagemPorId(idPostagem);
   }

   @GetMapping("/minhasPostagens/{idUsuario}")
   public List<Postagem> getPostagensPorIdUsuario(@PathVariable("idUsuario") Long idUsuario) {
       return this.postagemService.getPostagensPorIdUsuario(idUsuario);
   }

   @GetMapping("/destino/{destino}")
   public List<Postagem> getPostagemPorDestino(@PathVariable("destino") String destino) {
    return this.postagemService.getPostagensDestino(destino);
    }

   @PostMapping("/")
   public Postagem inserirPostagem(@RequestBody Postagem postagem){
       return this.postagemService.inserirOuAtualizar(postagem);
   }

   @PutMapping("/")
   public Postagem atualizarPostagem(@RequestBody Postagem postagem){
       return this.postagemService.inserirOuAtualizar(postagem);
   }

   @DeleteMapping("{id}")
   public void apagarPostagem(@PathVariable("id") Long id) {
       this.postagemService.apagar(id);
   }
}
