package com.aurionpro.service.shoturl;

import com.aurionpro.dto.shorturl.ShortUrlRequestDto;
import com.aurionpro.dto.shorturl.ShortUrlResponseDto;

public interface ShortUrlService {
	
	public ShortUrlResponseDto generateShortUrl(ShortUrlRequestDto request);
	

}
