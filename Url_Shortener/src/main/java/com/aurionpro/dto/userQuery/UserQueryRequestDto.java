package com.aurionpro.dto.userQuery;

import java.time.LocalDateTime;

import com.aurionpro.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class UserQueryRequestDto {

	private User user;
	private String queryText;
	private String status;
	private String responseText;
	private boolean resolved;
	private LocalDateTime createdAt;
	
	
}
