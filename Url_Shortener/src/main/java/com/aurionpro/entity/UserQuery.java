package com.aurionpro.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name = "userquerys")
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class UserQuery {

	@Id
	@GeneratedValue
	private Long id;
	@ManyToOne
	private User user;
	private String queryText;
	private String responseText;
	private boolean resolved;
	private LocalDateTime createdAt;
}
