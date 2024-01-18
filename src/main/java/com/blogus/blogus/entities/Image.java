package com.blogus.blogus.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Slf4j
@Table(name = "Images")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String Path;

    @OneToOne(mappedBy = "avatar")
    @JoinColumn(name = "id_user")
    private User user;
}
