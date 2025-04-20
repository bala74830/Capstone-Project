package com.aurionpro.service.userplan;

import org.springframework.http.HttpStatus;

import com.aurionpro.dto.userPlan.BuyPlanRequest;

public interface UserPlanService {
	
	public HttpStatus buyPlans(BuyPlanRequest request);

}
