package com.dev.ricardo.goiasgado.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.ricardo.goiasgado.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
	
}
