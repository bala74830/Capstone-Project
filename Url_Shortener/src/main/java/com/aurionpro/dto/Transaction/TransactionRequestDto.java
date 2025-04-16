package com.aurionpro.dto.Transaction;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class TransactionRequestDto {
	
	private String username;
	private String planname;
	private double amount;
	private LocalDate date;

}
