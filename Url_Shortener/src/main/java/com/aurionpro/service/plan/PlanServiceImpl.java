package com.aurionpro.service.plan;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aurionpro.dto.plan.PlanRequestDto;
import com.aurionpro.dto.plan.PlanResponseDto;
import com.aurionpro.entity.Plan;
import com.aurionpro.repository.PlanRepository;

@Service
public class PlanServiceImpl implements PlanService{

	@Autowired
	private PlanRepository planRepository;
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public PlanResponseDto createPlan(PlanRequestDto planDto) {
		Plan plan = mapper.map(planDto, Plan.class);
		planRepository.save(plan);
		return mapper.map(plan, PlanResponseDto.class);
	}

	@Override
	public PlanResponseDto updatePlan(PlanResponseDto planDto) {
		//Plan plan = planRepository.findById(planDto.getId());
		return null;
	}

}
