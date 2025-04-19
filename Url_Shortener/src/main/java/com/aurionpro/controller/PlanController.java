package com.aurionpro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurionpro.dto.plan.PlanRequestDto;
import com.aurionpro.dto.plan.PlanResponseDto;
import com.aurionpro.service.plan.PlanService;

@RestController
@RequestMapping("")
public class PlanController {
	
	@Autowired
	private PlanService planService;
	
	@GetMapping("")
	public ResponseEntity<PlanResponseDto> createPlan(@RequestBody PlanRequestDto planDto){
		return ResponseEntity.ok(planService.createPlan(planDto));
	}

}
