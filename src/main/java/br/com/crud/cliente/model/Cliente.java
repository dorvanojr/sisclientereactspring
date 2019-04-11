package br.com.crud.cliente.model;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;


import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

/**
 *
 */
@Entity
@Table(name="cliente")
public class Cliente implements Serializable {

  
	private static final long serialVersionUID = 1L;
	
	 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente")
	private int idCliente;
	@Column(name = "nome")
	private String nome;
	@Column(name = "cpf")
    private String cpf;
	@Column(name = "telefone")
	private String telefone;
	@Column(name = "endereco")
	private String endereco;

	public Cliente() {
		super();
	}


	
	
	public Cliente(int idCliente, String nome, String cpf, String telefone,
			String endereco) {
		super();
		this.idCliente = idCliente;
		this.nome = nome;
		this.cpf = cpf;
		this.telefone = telefone;
		this.endereco = endereco;
	}




	public int getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(int idCliente) {
		this.idCliente = idCliente;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}




	public String getTelefone() {
		return telefone;
	}




	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}




	public String getEndereco() {
		return endereco;
	}


    void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	@Override
	public String toString() {
		return "Cliente [idCliente=" + idCliente + ", nome=" + nome + ", cpf="
				+ cpf + ", telefone=" + telefone + ", endereco=" + endereco
				+ "]";
	}
	


	
		
    
	
}
