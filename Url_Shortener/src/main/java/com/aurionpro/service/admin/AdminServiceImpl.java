package com.aurionpro.service.admin;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.aurionpro.dto.Admin.AdminRequestDto;
import com.aurionpro.dto.Admin.AdminResponseDto;
import com.aurionpro.entity.Admin;
import com.aurionpro.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public AdminResponseDto register(AdminRequestDto adminDto) {
		Admin admin = mapper.map(adminDto, Admin.class);
		adminRepository.save(admin);
		return mapper.map(admin, AdminResponseDto.class);
	}

	@Override
	public HttpStatus login(AdminRequestDto adminDto) {
		if(adminRepository.exeistsByUsername(adminDto.getUsername()))
		{
			return HttpStatus.ACCEPTED;
		}
		return HttpStatus.BAD_REQUEST;
	}

}
