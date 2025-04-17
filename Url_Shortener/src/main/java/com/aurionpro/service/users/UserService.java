package com.aurionpro.service.users;

import com.aurionpro.dto.PageResponse.PageResponseDto;
import com.aurionpro.dto.User.AllUsersForAdminResponseDto;

public interface UserService {
	
	PageResponseDto<AllUsersForAdminResponseDto> getAllUsersForAdmin(int pagenumber,int pagesize);

}
