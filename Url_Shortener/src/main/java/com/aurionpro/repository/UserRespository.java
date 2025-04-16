package com.aurionpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aurionpro.entity.Users;

public interface UserRespository extends JpaRepository<Users, Integer>{

}
