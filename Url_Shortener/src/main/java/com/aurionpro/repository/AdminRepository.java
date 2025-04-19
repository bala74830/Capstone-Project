package com.aurionpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aurionpro.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>{

}
