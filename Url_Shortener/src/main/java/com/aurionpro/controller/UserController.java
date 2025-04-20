package com.aurionpro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurionpro.dto.user.UserLoginDto;
import com.aurionpro.dto.user.UserRequestDto;
import com.aurionpro.dto.user.UserResponseDto;
import com.aurionpro.service.users.UserService;

@RestController
@RequestMapping("urlapp/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<UserResponseDto> registerUser(@RequestBody UserRequestDto userDto)
	{
		return ResponseEntity.ok(userService.register(userDto));
	}
	
	@PostMapping("/login")
	public ResponseEntity<UserResponseDto> loginUser(@RequestBody UserLoginDto dto)
	{
		return ResponseEntity.ok(userService.login(dto));
	}
	
	

}
