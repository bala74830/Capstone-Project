package com.aurionpro.dto.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class UserResquestDto {

	private String username;

	private String firstname;

	private String lastname;

	private String email;

	private String password;
}
