package com.blogus.blogus.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Slf4j
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String titleCategory;

    @OneToMany(mappedBy = "category")
    private List<Post> posts;
}
