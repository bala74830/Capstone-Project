package com.aurionpro.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "userplans")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserPlan {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
    private int id;

    // Link to Users table
    @ManyToOne
    @JoinColumn(name = "user_id")  
    private Users user;


    // Link to Plans table
    @ManyToOne
    @JoinColumn(name = "plan_id")
    private Plan plan;

    @Column
    private LocalDate purchaseDate;

    @Column
    private boolean isActive;

    @PrePersist
    private void onCreate() {
        this.purchaseDate = LocalDate.now();
        this.isActive = true;
    }
}
