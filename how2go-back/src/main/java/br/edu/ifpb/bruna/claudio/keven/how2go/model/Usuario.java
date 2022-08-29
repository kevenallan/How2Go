package br.edu.ifpb.bruna.claudio.keven.how2go.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;
    private String email;
    private String senha;
    private String nome;
    @Lob
    private String foto;

    public Usuario() {};
    
    public Long getidUsuario() {
        return this.idUsuario;
    }

    public void setidUsuario(Long id) {
        this.idUsuario= id;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return this.senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getFoto() {
        return this.foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

	@Override
	public String toString() {
		return "Usuario [id=" + idUsuario + ", email=" + email + ", senha=" + senha + ", nome=" + nome + ", foto_perfil="
				+ foto + "]";
	}

   
}
