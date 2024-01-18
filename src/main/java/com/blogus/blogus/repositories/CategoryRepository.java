package com.blogus.blogus.repositories;

import com.blogus.blogus.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
