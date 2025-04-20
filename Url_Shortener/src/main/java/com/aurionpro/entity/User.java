package com.aurionpro.entity;

import java.util.List;

import com.aurionpro.emuns.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name = "users")
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String username;
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private boolean isactive;
	private boolean isblacklist;
	private Role role;

	@OneToMany(mappedBy = "user")
	private List<ShortUrl> shortUrls;

	@OneToMany(mappedBy = "user")
	private List<UserPlan> userPlans;

	@OneToMany(mappedBy = "user")
	private List<Transaction> transactions;

	@OneToMany(mappedBy = "user")
	private List<UserQuery> queries;

}
