package com.blogus.blogus.dto;

import com.blogus.blogus.entities.Category;
import com.blogus.blogus.entities.Comment;
import com.blogus.blogus.entities.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostDto {
    private Long id;
    private String title;
    private String content;
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "UTC")
    private Date date = new Date();
    private Category category;
    private List<Comment> comments;
    private User user;
}
