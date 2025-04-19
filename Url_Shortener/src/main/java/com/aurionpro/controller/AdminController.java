package com.aurionpro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurionpro.dto.Admin.AdminRequestDto;
import com.aurionpro.dto.Admin.AdminResponseDto;
import com.aurionpro.service.admin.AdminService;

@RestController
@RequestMapping("")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping
	public ResponseEntity<AdminResponseDto> registerAdmin(@RequestBody AdminRequestDto adminDto)
	{
		return ResponseEntity.ok(adminService.register(adminDto));
	}
	
	@PostMapping
	public ResponseEntity<HttpStatus> loginAdmin(@RequestBody AdminRequestDto adminDto)
	{
		return ResponseEntity.ok(adminService.login(adminDto));
	}

}
