package com.aurionpro.dto.plan;

import com.aurionpro.enums.Type;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class PlanResponseDto {
	
	private Type type;
	private String planname;
	private int urllimit;
	private int customurllimit;
	private int clicksperurl;
	private double amount;
	

}
