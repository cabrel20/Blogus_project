package com.blogus.blogus.dto;

import com.blogus.blogus.entities.Image;
import com.blogus.blogus.entities.Post;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;


import java.util.Date;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Slf4j
public class UserDto {
    private Long id;
    private String userName;
    private String email;
    private String password;
    private String biographie;
    @JsonFormat(pattern = "yyy-MM-dd", timezone = "UTC")
    private Date dateInscription = new Date();
    private List<Post> posts;
    private Image avatar;


}
