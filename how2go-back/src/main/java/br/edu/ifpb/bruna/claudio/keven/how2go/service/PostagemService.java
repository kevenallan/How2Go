package br.edu.ifpb.bruna.claudio.keven.how2go.service;

import br.edu.ifpb.bruna.claudio.keven.how2go.repositories.PostagemRepository;
import br.edu.ifpb.bruna.claudio.keven.how2go.model.Postagem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PostagemService {

   @Autowired
   private PostagemRepository postagemRepository;

   public List<Postagem> getPostagens() {
       return this.postagemRepository.findAll();
   }

   @Transactional
   public List<Postagem> getPostagensPorIdUsuario(Long idUsuario) {
    return this.postagemRepository.getPostagensPorIdUsuario(idUsuario);
   }   

   public Postagem getPostagemPorId(Long idPostagem) {
       return this.postagemRepository.findById(idPostagem).orElse(null);
   }

   @Transactional
   public List<Postagem> getPostagensDestino(String destino) {
    return this.postagemRepository.getPostagensDestino(destino);
    }
    
   @Transactional
   public Postagem inserirOuAtualizar(Postagem postagem) {
        Postagem postagemInserida = this.postagemRepository.save(postagem);
        return postagemInserida;
   }

   public void apagar(Long id) {
       this.postagemRepository.deleteById(id);
   }
}