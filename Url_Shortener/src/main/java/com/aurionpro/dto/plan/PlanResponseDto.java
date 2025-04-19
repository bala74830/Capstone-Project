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
	private Type type;
	private int urllimit;
	private int customerlimit;
	private int clicksperurl;
	private double price;

}
