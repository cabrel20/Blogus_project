package com.blogus.blogus.repositories;

import com.blogus.blogus.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post,Long> {
}