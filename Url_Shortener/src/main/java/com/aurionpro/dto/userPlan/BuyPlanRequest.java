package com.aurionpro.dto.userPlan;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class BuyPlanRequest {
	
	private int userId;
    private List<Integer> planIds;	

}
