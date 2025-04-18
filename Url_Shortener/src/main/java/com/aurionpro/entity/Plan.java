package com.aurionpro.entity;

import java.util.List;

import com.aurionpro.enums.Type;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
	private int customerlimit;
	
	@Column
	private int clicksperurl;
	
	@Column
	private double amount;
	
	@Column
	boolean isactive;
	
	@OneToMany(mappedBy = "plan", cascade = CascadeType.ALL)
	private List<UserPlan> userPlans;
	
	

}
