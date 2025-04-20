package com.aurionpro.service.shoturl;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aurionpro.dto.shorturl.ShortUrlRequestDto;
import com.aurionpro.dto.shorturl.ShortUrlResponseDto;
import com.aurionpro.entity.ShortUrl;
import com.aurionpro.entity.User;
import com.aurionpro.repository.ShortUrlRepository;
import com.aurionpro.repository.UserRepository;

@Service
public class ShortUrlServiceImpl implements ShortUrlService {

	@Autowired
	private ShortUrlRepository shortUrlRepo;

	@Autowired
	private UserRepository userRepo;

	@Override
	public ShortUrlResponseDto generateShortUrl(ShortUrlRequestDto request) {
		User user = userRepo.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Optional<ShortUrl> existingUrl = shortUrlRepo.findByOriginalUrlAndUserId(request.getOriginalUrl(), request.getUserId());
        if (existingUrl.isPresent()) {
            return new ShortUrlResponseDto(existingUrl.get().getShortCode());
        }

      
        String combined = request.getOriginalUrl() + System.currentTimeMillis();

       
        String encoded = Base64.getUrlEncoder().withoutPadding()
                .encodeToString(combined.getBytes(StandardCharsets.UTF_8));

      
        String shortCode = encoded.substring(0, 8);

        ShortUrl shortUrl = new ShortUrl();
        shortUrl.setOriginalUrl(request.getOriginalUrl());
        shortUrl.setShortCode(shortCode);
        shortUrl.setCreatedAt(LocalDateTime.now());
        shortUrl.setTotalClicks(0);
        shortUrl.setUser(user);

        shortUrlRepo.save(shortUrl);

        return new ShortUrlResponseDto(shortCode);
	}

}
