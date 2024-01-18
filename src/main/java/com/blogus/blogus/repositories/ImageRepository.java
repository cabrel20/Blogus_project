package com.blogus.blogus.repositories;

import com.blogus.blogus.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image,Long> {
}
