package com.aurionpro.dto.userQuery;

import java.time.LocalDateTime;

import com.aurionpro.entity.User;
import com.aurionpro.entity.UserQuery;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class AdminQueryRequestDto {
	
	private String status;
	private String responseText;
	private boolean resolved;

}
