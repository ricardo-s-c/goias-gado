package com.dev.ricardo.goiasgado.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.ricardo.goiasgado.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
}
