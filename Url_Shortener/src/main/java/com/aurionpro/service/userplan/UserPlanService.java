package com.aurionpro.service.userplan;

import java.util.List;

import com.aurionpro.dto.userPlan.UserPlanResponseDto;
import com.aurionpro.entity.UserPlan;

public interface UserPlanService {

	UserPlan saveUserPlan(int userId, int planId);

	List<UserPlanResponseDto> getAllUserPlans();
	

}
