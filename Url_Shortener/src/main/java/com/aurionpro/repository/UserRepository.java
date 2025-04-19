package com.aurionpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aurionpro.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
