package com.dev.ricardo.goiasgado.dto;

import java.io.Serializable;

public class OrderInsertDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	private String email;
	
	private Integer lote;
	
	private Double lance;

	public OrderInsertDTO() {
	}

	public OrderInsertDTO(Long id, String email, Integer lote, Double lance) {
		super();
		this.id = id;
		this.email = email;
		this.lote = lote;
		this.lance = lance;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getLote() {
		return lote;
	}

	public void setLote(Integer lote) {
		this.lote = lote;
	}

	public Double getLance() {
		return lance;
	}

	public void setLance(Double lance) {
		this.lance = lance;
	}

	@Override
	public String toString() {
		return "OrderInsertDTO [id=" + id + ", email=" + email + ", lote=" + lote + ", lance=" + lance + "]";
	}
	
	
}
