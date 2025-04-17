package com.aurionpro.service.admin;

import com.aurionpro.dto.Admin.AdminRequestDto;
import com.aurionpro.dto.Admin.AdminResponseDto;

public interface AdminService {
	
	AdminResponseDto addAdmin(AdminRequestDto dto);

}
