package br.edu.ifpb.bruna.claudio.keven.how2go.repositories;

import br.edu.ifpb.bruna.claudio.keven.how2go.model.Postagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostagemRepository extends JpaRepository<Postagem, Long> {

   List<Postagem> findByDestino(String destino);

   @Query("SELECT p FROM Postagem p where lower(p.destino) like lower(concat('%', :destino,'%'))")
   public List<Postagem> getPostagensDestino(String destino);

   @Query("SELECT p from Postagem p where p.usuario.idUsuario =:idUsuario" )
   public List<Postagem> getPostagensPorIdUsuario(Long idUsuario);
}
