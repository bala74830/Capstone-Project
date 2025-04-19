package com.aurionpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aurionpro.entity.ShortUrl;

public interface ShortUrlRepository extends JpaRepository<ShortUrl, Integer>{

}
