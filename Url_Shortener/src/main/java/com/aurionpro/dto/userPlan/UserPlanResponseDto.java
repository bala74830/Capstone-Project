package com.aurionpro.dto.userPlan;

import com.aurionpro.enums.Type;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class UserPlanResponseDto {

	private String planname;
	private Type type;
	private int urllimit;
	private int customerlimit;
	private int clicksperurl;
	private double amount;
	private String username;

}
