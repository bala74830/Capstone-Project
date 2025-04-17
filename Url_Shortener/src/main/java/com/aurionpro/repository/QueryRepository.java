package com.aurionpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aurionpro.entity.Query;

public interface QueryRepository extends JpaRepository<Query, Integer>{

}
