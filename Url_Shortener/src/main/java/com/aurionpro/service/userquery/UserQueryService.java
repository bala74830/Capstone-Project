package com.aurionpro.service.userquery;

import org.springframework.http.HttpStatus;

import com.aurionpro.dto.PageResponse.PageResponseDto;
import com.aurionpro.dto.userQuery.AdminQueryRequestDto;
import com.aurionpro.dto.userQuery.AdminViewDto;
import com.aurionpro.dto.userQuery.UserQueryRequestDto;

public interface UserQueryService {
	
	HttpStatus assignQuery (UserQueryRequestDto dto);
	PageResponseDto<AdminViewDto> viewAllUserQueries(int pagenumber,int pagesize); 
	HttpStatus amdinRepsone(AdminQueryRequestDto dto,int userid);

}
