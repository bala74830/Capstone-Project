package com.aurionpro.service.shoturl;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

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
		
	
		
		
		

        // Check if short URL already exists for this user and original URL
        Optional<ShortUrl> existingUrl = shortUrlRepo.findByOriginalUrlAndUserId(request.getOriginalUrl(), request.getUserId());
        if (existingUrl.isPresent()) {
            return new ShortUrlResponseDto(existingUrl.get().getShortCode());
        }

        // Generate unique short code using UUID
        String shortCode = UUID.randomUUID().toString().replace("-", "").substring(0, 8);

        // Save the new short URL entity
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
