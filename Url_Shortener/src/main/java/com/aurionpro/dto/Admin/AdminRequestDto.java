package com.aurionpro.dto.Admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class AdminRequestDto {
	
	private String username;
	private String password;

}
