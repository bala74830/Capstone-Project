package com.aurionpro.entity;

import java.util.List;

import com.aurionpro.emuns.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
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

	    @NotBlank(message = "Username must not be blank")
	    private String username;

	    @NotBlank(message = "First name must not be blank")
	    private String firstname;

	    @NotBlank(message = "Last name must not be blank")
	    private String lastname;

	    @NotBlank(message = "Email must not be blank")
	    @Email(message = "Email should be valid")
	    private String email;

	    @NotBlank(message = "Password must not be blank")
	    @Size(min = 4, message = "Password must be at least 4 characters long")
	    private String password;

	    private boolean isactive;

	    private boolean isblacklist;

	    @NotNull(message = "Role must not be null")
	    private Role role;

	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	    private List<ShortUrl> shortUrls;

	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	    private List<UserPlan> userPlans;

	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	    private List<Transaction> transactions;

	    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	    private List<UserQuery> queries;

	    @PrePersist
	    private void init() {
	        this.isactive = true;
	        this.isblacklist = false;
	        this.role = Role.Customer; // Default role assigned
	    }

}
