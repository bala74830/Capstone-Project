package com.aurionpro.dto.User;

import java.util.List;

import com.aurionpro.entity.Plan;
import com.aurionpro.entity.Url;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class AllUsersForAdminResponseDto {

	private String username;

	private String firstname;

	private String lastname;

	private double totalrevenue;
	private boolean isactive;
	private List<Url> urls;
	private List<Plan> plans;

}
