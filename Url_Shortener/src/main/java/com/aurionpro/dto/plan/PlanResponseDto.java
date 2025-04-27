package com.aurionpro.dto.plan;

import com.aurionpro.emuns.Type;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class PlanResponseDto {
	
	private int id;
	private String planname;
	private int urllimit;
	private int clicksperurl;
	private int customurllimit;
	private double price;
	private Type type;

}
