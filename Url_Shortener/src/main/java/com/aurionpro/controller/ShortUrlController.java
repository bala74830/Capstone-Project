package com.aurionpro.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurionpro.dto.shorturl.ShortUrlRequestDto;
import com.aurionpro.dto.shorturl.ShortUrlResponseDto;
import com.aurionpro.entity.ShortUrl;
import com.aurionpro.repository.ShortUrlRepository;
import com.aurionpro.service.shoturl.ShortUrlService;

@RestController
@RequestMapping("urlapp/generateurl")
@CrossOrigin(origins = "http://localhost:4200/")
public class ShortUrlController {
	
	 @Autowired	
	 private ShortUrlService service;
	 @Autowired	
	 private ShortUrlRepository shortUrlRepo;
	 
	 @PostMapping("/short")
	    public ResponseEntity<ShortUrlResponseDto> generateShortUrl(@RequestBody ShortUrlRequestDto dto) {
	        return ResponseEntity.ok(service.generateShortUrl(dto));
	    }
	 
	 @GetMapping("/{shortCode}")
	 public ResponseEntity<Void> redirectToOriginalUrl(@PathVariable String shortCode) {
	     ShortUrl shortUrl = shortUrlRepo.findByShortCode(shortCode)
	         .orElseThrow(() -> new RuntimeException("Short URL not found"));

	     
	     shortUrl.setTotalClicks(shortUrl.getTotalClicks() + 1);
	     shortUrlRepo.save(shortUrl);

	     return ResponseEntity.status(HttpStatus.FOUND)
	         .location(URI.create(shortUrl.getOriginalUrl()))
	         .build();
	 }

}
