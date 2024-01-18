package com.blogus.blogus.repositories;

import com.blogus.blogus.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
