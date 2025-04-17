package com.aurionpro.entity;

import com.aurionpro.enums.Type;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name="plans")
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class Plan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;
	
	@Column
	private String planname;
	
	@Column
	private Type type;
	
	@Column
	private int urllimit;
	
	@Column
	private int customurllimit;
	
	@Column
	private int clicksperurl;
	
	@Column
	private double amount;
	
	@Column
	boolean isactive;
	
	@ManyToOne
	@JoinColumn(name="id")
	private Users users;

}
