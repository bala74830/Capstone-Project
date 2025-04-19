package com.aurionpro.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name="shorturls")
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class ShortUrl {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String originalUrl;
    private String shortCode;
    private int totalClicks;
    private LocalDateTime createdAt;
    
    @ManyToOne private User user;

}
