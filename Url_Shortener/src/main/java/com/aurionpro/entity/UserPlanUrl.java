package com.aurionpro.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "userplanurl")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserPlanUrl {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // Link to the user (to get username)
    @ManyToOne
    @JoinColumn(name = "id")
    private Users user;

    // Link to the URL (to get all url info)
    @ManyToOne
    @JoinColumn(name = "id")
    private Url url;

    // Link to the plan (to get clicksperurl)
    @ManyToOne
    @JoinColumn(name = "id")
    private Plan plan;

    @Column
    private int clicksLeft;
}
