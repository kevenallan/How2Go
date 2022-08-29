package br.edu.ifpb.bruna.claudio.keven.how2go.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.bruna.claudio.keven.how2go.model.Usuario;
import br.edu.ifpb.bruna.claudio.keven.how2go.service.UsuarioService;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

   @Autowired
   private UsuarioService usuarioService;

   @GetMapping("/")
   public List<Usuario> getUsuario() {
       return this.usuarioService.getUsuarios();
   }

   @GetMapping("/{id}")
   public Usuario getUsuarioPorId(@PathVariable("id") Long idUsuario) {
       return this.usuarioService.getUsuarioPorId(idUsuario);
   }
   @GetMapping("/email/{email}")
   public Usuario getUsuarioPorEmail(@PathVariable("email") String email) {
       return this.usuarioService.getUsuarioPorEmail(email);
   }

   @GetMapping("/login/{email}/{senha}")
   public Usuario getUsuarioPorEmailEsenha(@PathVariable String email, @PathVariable String senha) {
       return this.usuarioService. getUsuarioPorEmailESenha(email,senha);
   }
  
   @PostMapping("/")
   public Usuario inserirUsuario(@RequestBody Usuario usuario) {    
        return this.usuarioService.inserirOuAtualizar(usuario);    
   }

   @PutMapping("/atualizar-usuario")
   public Usuario atualizarUsuario(@RequestBody Usuario usuario){
       return this.usuarioService.inserirOuAtualizar(usuario);
   }

   @DeleteMapping("/{id}")
   public void apagarUsuario(@PathVariable("id") Long id) {
       this.usuarioService.apagar(id);
   }
    
}
