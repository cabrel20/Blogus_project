package com.blogus.blogus.repositories;

import com.blogus.blogus.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment,Long> {
}
