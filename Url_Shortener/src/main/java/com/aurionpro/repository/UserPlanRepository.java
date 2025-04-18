package com.aurionpro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.aurionpro.dto.userPlan.UserPlanResponseDto;
import com.aurionpro.entity.UserPlan;

public interface UserPlanRepository extends JpaRepository<UserPlan, Integer>{
	@Query("SELECT new com.aurionpro.dto.userPlan.UserPlanResponseDto(p.planname, p.type, p.urllimit, " +
		       "p.customerlimit, p.clicksperurl, p.amount, u.username) " +
		       "FROM UserPlan up JOIN up.plan p JOIN up.user u")
		List<UserPlanResponseDto> fetchUserPlansWithUsername();


}
