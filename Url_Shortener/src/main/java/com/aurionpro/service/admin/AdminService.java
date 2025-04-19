package com.aurionpro.service.admin;

import org.springframework.http.HttpStatus;

import com.aurionpro.dto.Admin.AdminRequestDto;
import com.aurionpro.dto.Admin.AdminResponseDto;



public interface AdminService {
	
	AdminResponseDto register(AdminRequestDto adminDto);
	
	HttpStatus login(AdminRequestDto adminDto);

}
