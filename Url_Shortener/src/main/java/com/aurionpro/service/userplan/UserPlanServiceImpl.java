package com.aurionpro.service.userplan;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.aurionpro.dto.plan.PlanResponseDto;
import com.aurionpro.dto.userPlan.BuyPlanRequest;
import com.aurionpro.entity.Plan;
import com.aurionpro.entity.User;
import com.aurionpro.entity.UserPlan;
import com.aurionpro.exception.ApiException;
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
	public HttpStatus buyPlans(BuyPlanRequest request) {
		User user = userRepository.findById(request.getUserId())
				.orElseThrow(() -> new RuntimeException("User not found"));

		List<UserPlan> activeUserPlans = userPlanRepository.findByUserIdAndExpiryDateAfter(user.getId(),
				LocalDateTime.now());

		List<Integer> alreadyOwnedPlanIds = activeUserPlans.stream().map(up -> up.getPlan().getId())
				.collect(Collectors.toList());

		List<Integer> requestedPlanIds = request.getPlanIds();

		List<Integer> plansToBuy = requestedPlanIds.stream().filter(planId -> !alreadyOwnedPlanIds.contains(planId))
				.collect(Collectors.toList());

		if (plansToBuy.isEmpty()) {
			return HttpStatus.IM_USED;
		}

		List<Plan> plans = planRepository.findAllById(plansToBuy);

		for (Plan plan : plans) {
			UserPlan userPlan = new UserPlan();
			userPlan.setUser(user);
			userPlan.setPlan(plan);
			userPlan.setRemainingUrls(plan.getCustomerlimit());
			userPlan.setRemainingClicks(plan.getClicksperurl());
			userPlan.setExpiryDate(LocalDateTime.now().plusMonths(1));

			userPlanRepository.save(userPlan);
		}

		return HttpStatus.ACCEPTED;
	}

	@Override
	public List<PlanResponseDto> viewUserPlans(int userid) {
		 User user = userRepository.findById(userid).orElseThrow(() -> new ApiException("no user found"));
		    
		    List<PlanResponseDto> planDtos = new ArrayList<>();
		    
		    for (UserPlan userplan : user.getUserPlans()) {
		        PlanResponseDto planDto = new PlanResponseDto();
		        planDto.setId(userplan.getPlan().getId());
		        planDto.setPlanname(userplan.getPlan().getPlanname());
		        planDto.setType(userplan.getPlan().getType());
		        planDto.setClicksperurl(userplan.getPlan().getClicksperurl());
		        planDto.setUrllimit(userplan.getPlan().getUrllimit());
		        planDto.setCustomerlimit(userplan.getPlan().getCustomerlimit());
		        planDto.setPrice(userplan.getPlan().getPrice());
		        planDtos.add(planDto);
		    }
		    
		    return planDtos;
	}

}
