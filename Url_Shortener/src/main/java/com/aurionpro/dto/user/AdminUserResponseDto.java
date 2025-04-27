package com.aurionpro.dto.user;

import java.util.List;

import com.aurionpro.emuns.Role;
import com.aurionpro.entity.ShortUrl;
import com.aurionpro.entity.Transaction;
import com.aurionpro.entity.UserPlan;
import com.aurionpro.entity.UserQuery;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class AdminUserResponseDto {
	
	private int id;
	private String username;
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private boolean isblacklist;
	private List<String> shortUrls;
	private List<String> userPlans;

}
