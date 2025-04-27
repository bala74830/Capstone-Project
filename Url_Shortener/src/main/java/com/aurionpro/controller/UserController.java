package com.aurionpro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aurionpro.dto.PageResponse.PageResponseDto;
import com.aurionpro.dto.user.AdminBlacklistUserResponseDto;
import com.aurionpro.dto.user.AdminUserResponseDto;
import com.aurionpro.dto.user.UserLoginDto;
import com.aurionpro.dto.user.UserRequestDto;
import com.aurionpro.dto.user.UserResponseDto;
import com.aurionpro.service.users.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("urlapp/user")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<UserResponseDto> registerUser(@Valid @RequestBody UserRequestDto userDto)
	{
		return ResponseEntity.ok(userService.register(userDto));
	}
	
	@PostMapping("/login")
	public ResponseEntity<UserResponseDto> loginUser(@Valid @RequestBody UserLoginDto dto)
	{
		return ResponseEntity.ok(userService.login(dto));
	}
	
	@GetMapping("/getallusers")
	public ResponseEntity<PageResponseDto<AdminUserResponseDto>> getAllUsers(@RequestParam int pageNumber, @RequestParam int pageSize)
	{
		return ResponseEntity.ok(userService.getAllUsers(pageNumber, pageSize));
	}
	
	
	@GetMapping("/getallblockusers")
	public ResponseEntity<PageResponseDto<AdminBlacklistUserResponseDto>> getAllBlockUsers(@RequestParam int pageNumber, @RequestParam int pageSize)
	{
		return ResponseEntity.ok(userService.getAllBlackListedUsers(pageNumber, pageSize));
	}
	

}
