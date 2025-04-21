package com.aurionpro.dto.shorturl;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class ShortUrlRequestDto {
	
	private String originalUrl;
    private int userId;
    private int planid;

}
