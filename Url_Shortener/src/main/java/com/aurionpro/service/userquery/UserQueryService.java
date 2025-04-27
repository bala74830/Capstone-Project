package com.aurionpro.service.userquery;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.aurionpro.dto.PageResponse.PageResponseDto;
import com.aurionpro.dto.userQuery.AdminQueryRequestDto;
import com.aurionpro.dto.userQuery.AdminViewDto;
import com.aurionpro.dto.userQuery.UserQueryRequestDto;
import com.aurionpro.dto.userQuery.UserQueryResponseDto;

public interface UserQueryService {
	
	HttpStatus assignQuery (UserQueryRequestDto dto);
	PageResponseDto<AdminViewDto> viewAllUserQueries(int pagenumber,int pagesize); 
	HttpStatus amdinRepsone(AdminQueryRequestDto dto,int userid);
	List<UserQueryResponseDto> getAllUserQueries(int userid);

}
