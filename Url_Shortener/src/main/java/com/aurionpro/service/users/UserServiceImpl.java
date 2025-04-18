package com.aurionpro.service.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aurionpro.dto.PageResponse.PageResponseDto;
import com.aurionpro.dto.User.AllUsersForAdminResponseDto;
import com.aurionpro.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRespository;

	@Override
	public PageResponseDto<AllUsersForAdminResponseDto> getAllUsersForAdmin(int pagenumber, int pagesize) {
		// TODO Auto-generated method stub
		return null;
	}

}
