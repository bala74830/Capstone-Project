package com.aurionpro.dto.user;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class UserLoginDto {
	
	private String username;
	private String password;

}
