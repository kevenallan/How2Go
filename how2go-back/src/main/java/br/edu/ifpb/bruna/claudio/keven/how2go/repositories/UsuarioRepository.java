package br.edu.ifpb.bruna.claudio.keven.how2go.repositories;

import br.edu.ifpb.bruna.claudio.keven.how2go.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByEmail(String email);
    Usuario findByEmailAndSenha(String email, String senha);
}
