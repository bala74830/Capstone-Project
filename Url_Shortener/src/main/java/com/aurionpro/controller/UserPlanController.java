package com.aurionpro.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aurionpro.dto.userPlan.UserPlanResponseDto;
import com.aurionpro.entity.UserPlan;
import com.aurionpro.service.userplan.UserPlanService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/userplans")
@RequiredArgsConstructor
public class UserPlanController {

    private final UserPlanService userPlanService;

    
    @PostMapping("/assign")
    public ResponseEntity<UserPlan> assignPlanToUser(@RequestParam int userId, @RequestParam int planId) {
        UserPlan userPlan = userPlanService.saveUserPlan(userId, planId);
        return ResponseEntity.ok(userPlan);
    }

    
    @GetMapping
    public ResponseEntity<List<UserPlanResponseDto>> getAllUserPlans() {
        List<UserPlanResponseDto> response = userPlanService.getAllUserPlans();
        return ResponseEntity.ok(response);
    }
}
