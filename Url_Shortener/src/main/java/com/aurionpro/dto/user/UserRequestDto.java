package com.aurionpro.dto.user;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class UserRequestDto {
	
	private String username;
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private boolean isactive;
	
}
