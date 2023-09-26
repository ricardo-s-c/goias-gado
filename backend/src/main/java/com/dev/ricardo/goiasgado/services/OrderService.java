package com.dev.ricardo.goiasgado.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dev.ricardo.goiasgado.dto.OrderDTO;
import com.dev.ricardo.goiasgado.dto.OrderInsertDTO;
import com.dev.ricardo.goiasgado.dto.UserDTO;
import com.dev.ricardo.goiasgado.entities.Order;
import com.dev.ricardo.goiasgado.entities.User;
import com.dev.ricardo.goiasgado.repositories.OrderRepository;
import com.dev.ricardo.goiasgado.repositories.UserRepository;
import com.dev.ricardo.goiasgado.services.exceptions.DatabaseException;
import com.dev.ricardo.goiasgado.services.exceptions.ResourceNotFoundException;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public Page<OrderDTO> findAllPaged(Pageable pageable) {
		Page<Order> list = repository.findAll(pageable);
		return list.map(x -> new OrderDTO(x));
	}
	
	@Transactional(readOnly = true)
	public OrderDTO findById(Long id) {
		Optional<Order> obj = repository.findById(id);
		Order entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		
		
		return new OrderDTO(entity);
	}
	
	@Transactional
	public OrderDTO insert(OrderInsertDTO dto) {
		
		try {
			Order entity = new Order();
			User user = userRepository.findByEmail(dto.getEmail());
			entity.setUser(user);
			entity.setLote(dto.getLote());
			entity.setLance(dto.getLance());
			entity = repository.save(entity);
			return new OrderDTO(entity);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Email not found " + dto.getEmail());
		}
	}

	@Transactional
	public OrderDTO update(Long id, OrderInsertDTO dto) {

		try {
			Order entity = repository.getOne(id);
			User user = userRepository.findByEmail(dto.getEmail());
			entity.setUser(user);
			entity.setLote(dto.getLote());
			entity.setLance(dto.getLance());
			entity = repository.save(entity);
			return new OrderDTO(entity);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Email ou Id not found " + dto.getEmail() + id);
		}
		catch (Exception e) {
			throw new DatabaseException("Email: "+dto.getEmail()+ "  ou  Id: "+id+" not found ");
		}
	}
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}
}
