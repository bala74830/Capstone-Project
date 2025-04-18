package com.aurionpro.service.userplan;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aurionpro.dto.userPlan.UserPlanResponseDto;
import com.aurionpro.entity.Plan;
import com.aurionpro.entity.UserPlan;
import com.aurionpro.entity.Users;
import com.aurionpro.repository.PlanRepository;
import com.aurionpro.repository.UserPlanRepository;
import com.aurionpro.repository.UserRepository;

@Service
public class UserPlanServiceImpl implements UserPlanService {
	@Autowired
	private UserPlanRepository userPlanRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PlanRepository planRepository;

	@Override
	public UserPlan saveUserPlan(int userId, int planId) {
		Optional<Users> userOpt = userRepository.findById(userId);
		Optional<Plan> planOpt = planRepository.findById(planId);

		if (userOpt.isEmpty() || planOpt.isEmpty()) {
			throw new RuntimeException("User or Plan not found");
		}

		UserPlan userPlan = new UserPlan();
		userPlan.setUser(userOpt.get());
		userPlan.setPlan(planOpt.get());

		return userPlanRepository.save(userPlan);
	}
	
	@Override
	public List<UserPlanResponseDto> getAllUserPlans() {
		return userPlanRepository.fetchUserPlansWithUsername();
	}

}
