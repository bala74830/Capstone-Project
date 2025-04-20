package com.aurionpro.dto.userQuery;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class AdminViewDto {
	
	private int id;
	private String username;
	private String queryText;
	private String status;

}
