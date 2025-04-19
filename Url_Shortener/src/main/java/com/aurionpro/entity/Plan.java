package com.aurionpro.entity;

import com.aurionpro.emuns.Type;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
	private int id;
	private String planname;
	private Type type;
	private int urllimit;
	private int customerlimit;
	private int clicksperurl;
	private double price;
	private boolean isactive;
	
}
