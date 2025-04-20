package com.aurionpro.service.users;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aurionpro.dto.user.UserLoginDto;
import com.aurionpro.dto.user.UserRequestDto;
import com.aurionpro.dto.user.UserResponseDto;
import com.aurionpro.entity.User;
import com.aurionpro.exception.ApiException;
import com.aurionpro.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ModelMapper mapper;

	@Override
	public UserResponseDto register(UserRequestDto userDto) {
		User user = mapper.map(userDto, User.class);
		userRepository.save(user);
		
		return mapper.map(user, UserResponseDto.class);
	}

	@Override
	public UserResponseDto login(UserLoginDto userDto) {

		User user = userRepository.findByUsername(userDto.getUsername())
				.orElseThrow(() -> new ApiException("User not found"));
		
		return mapper.map(user, UserResponseDto.class);
	}

}
