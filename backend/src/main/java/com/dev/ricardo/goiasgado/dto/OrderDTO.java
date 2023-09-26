package com.dev.ricardo.goiasgado.dto;

import java.io.Serializable;

import com.dev.ricardo.goiasgado.entities.Order;
import com.dev.ricardo.goiasgado.entities.User;

public class OrderDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	private UserDTO user;
	
	private Integer lote;
	
	private Double lance;

	public OrderDTO() {
	}

	public OrderDTO(Long id, UserDTO user, Integer lote, Double lance) {
		super();
		this.id = id;
		this.user = user;
		this.lote = lote;
		this.lance = lance;
	}
	
	public OrderDTO(Order entity) {
		UserDTO userDTO = new UserDTO(entity.getUser());
		id = entity.getId();
		user = userDTO;
		lote = entity.getLote();
		lance = entity.getLance();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
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

}
