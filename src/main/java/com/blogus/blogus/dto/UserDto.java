package com.blogus.blogus.dto;

import com.blogus.blogus.entities.Post;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;


public class UserDto {
    private Long id;

    private String userName;

    private String email;

    private String password;
    private String Biographie;
    private Date dateInscription;

    private List<Post> posts;

    public UserDto(Long id, String userName, String biographie, Date dateInscription, List<Post> posts) {
        this.id = id;
        this.userName = userName;
        Biographie = biographie;
        this.dateInscription = dateInscription;
        this.posts = posts;
    }
}
