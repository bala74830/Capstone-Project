package com.aurionpro.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name="userplans")
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class UserPlan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int remainingUrls;
    private int remainingClicks;
    private LocalDateTime expiryDate;
    
    @ManyToOne private User user;
    
    @ManyToOne private Plan plan;
}
