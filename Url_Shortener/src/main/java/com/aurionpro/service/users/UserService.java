package com.aurionpro.service.users;

import org.springframework.http.HttpStatus;

import com.aurionpro.dto.user.UserLoginDto;
import com.aurionpro.dto.user.UserRequestDto;
import com.aurionpro.dto.user.UserResponseDto;

public interface UserService {
	
	UserResponseDto register(UserRequestDto userDto);
	
	UserResponseDto login(UserLoginDto userDto);

}
