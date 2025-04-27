package com.aurionpro.service.userquery;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.aurionpro.dto.PageResponse.PageResponseDto;
import com.aurionpro.dto.user.UserResponseDto;
import com.aurionpro.dto.userQuery.AdminQueryRequestDto;
import com.aurionpro.dto.userQuery.AdminViewDto;
import com.aurionpro.dto.userQuery.UserQueryRequestDto;
import com.aurionpro.dto.userQuery.UserQueryResponseDto;
import com.aurionpro.entity.User;
import com.aurionpro.entity.UserQuery;
import com.aurionpro.exception.ApiException;
import com.aurionpro.repository.UserQueryRepository;
import com.aurionpro.repository.UserRepository;

@Service
public class UserQeuryServiceImpl implements UserQueryService {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserQueryRepository userQueryRepository;

	@Override
	public HttpStatus assignQuery(UserQueryRequestDto dto) {
		UserQuery query = new UserQuery();
		query.setQueryText(dto.getQueryText());
		User user = userRepository.findById(dto.getUserid()).orElseThrow(() -> new ApiException("User not found"));
		query.setUser(user);

		
		List<UserQuery> querylist = new ArrayList<>();
		querylist.add(query);
		user.setQueries(querylist);
		userRepository.save(user);
		//userQueryRepository.save(query);
		return HttpStatus.ACCEPTED;
	}

	@Override
	public PageResponseDto<AdminViewDto> viewAllUserQueries(int pagenumber, int pagesize) {
		Pageable pageable = PageRequest.of(pagenumber, pagesize);

		Page<UserQuery> pageuserquery = userQueryRepository.findAll(pageable);
		PageResponseDto<AdminViewDto> pageResponseDto = new PageResponseDto<>();

		pageResponseDto.setPagenumber(pageuserquery.getNumber());
		pageResponseDto.setPagesize(pageuserquery.getSize());
		pageResponseDto.setTotalpages(pageuserquery.getTotalPages());
		pageResponseDto.setTotalelements(pageuserquery.getTotalElements());
		List<UserQuery> dbuserquery = pageuserquery.getContent();
		List<AdminViewDto> dtoUsersquery = new ArrayList<>();
		for (UserQuery userq : dbuserquery) {
			if(!userq.isResolved())
			{
				User user = userRepository.findById(userq.getUser().getId()).orElseThrow(() -> new ApiException("User not found"));
				String name = user.getUsername();
				AdminViewDto dto = new AdminViewDto();
				dto.setId(userq.getId());
				dto.setUsername(name);
				dto.setQueryText(userq.getQueryText());
				dto.setStatus(userq.getStatus());
				dtoUsersquery.add(dto);
			}
			
		}
		pageResponseDto.setContent(dtoUsersquery);
		pageResponseDto.setIslast(pageuserquery.isLast());
		return pageResponseDto;
	}

	@Override
	public HttpStatus amdinRepsone(AdminQueryRequestDto dto,int userid) {
		
		return null;
	}

	@Override
	public List<UserQueryResponseDto> getAllUserQueries(int userid) {
		
		User user = userRepository.findById(userid).orElseThrow(() -> new ApiException("User not found"));
		List<UserQuery> queries = user.getQueries();
		List<UserQueryResponseDto> list = new ArrayList<>();
		for(UserQuery q : queries)
		{
			list.add(mapper.map(q, UserQueryResponseDto.class));
		}
		return list;
	}

}
