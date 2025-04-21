package com.aurionpro.service.userplan;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.aurionpro.dto.plan.PlanResponseDto;
import com.aurionpro.dto.userPlan.BuyPlanRequest;

public interface UserPlanService {
	
	public HttpStatus buyPlans(BuyPlanRequest request);

	List<PlanResponseDto> viewUserPlans(int userid);

}
