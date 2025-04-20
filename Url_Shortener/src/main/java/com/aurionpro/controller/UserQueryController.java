package com.aurionpro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aurionpro.dto.PageResponse.PageResponseDto;
import com.aurionpro.dto.userQuery.AdminViewDto;
import com.aurionpro.dto.userQuery.UserQueryRequestDto;
import com.aurionpro.service.userquery.UserQueryService;

@RestController
@RequestMapping("urlapp")
public class UserQueryController {
	
	@Autowired
	private UserQueryService queryService;
	
	@PostMapping("/assign")
	public ResponseEntity<HttpStatus> assignquery(@RequestBody UserQueryRequestDto dto)
	{
		return ResponseEntity.ok(queryService.assignQuery(dto));
	}
	
	@GetMapping("/view")
	public ResponseEntity<PageResponseDto<AdminViewDto>> viewallQueries(@RequestParam int pageNumber, @RequestParam int pageSize)
	{
		return ResponseEntity.ok(queryService.viewAllUserQueries(pageNumber, pageSize));
	}

}
