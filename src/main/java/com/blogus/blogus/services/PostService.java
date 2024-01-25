package com.blogus.blogus.services;


import com.blogus.blogus.dto.PostDto;
import com.blogus.blogus.entities.Post;
import com.blogus.blogus.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    public void setPostRepository(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    private PostRepository postRepository;

    // create post function
    public String createPost(PostDto postDto){
        Post post = Post.builder()
                .title(postDto.getTitle())
                .date(postDto.getDate())
                .content(postDto.getContent())
                .user(postDto.getUser())
                .build();
        postRepository.save(post);
        return "post is created";
    }

    // get all posts function
    public List<PostDto> getAllPost(){
        List<Post> posts = postRepository.findAll();
        return posts.stream().map(this::mapToPost).toList();
    }

    // function for map posts
    private PostDto mapToPost(Post post) {
        return PostDto.builder()
                .id(post.getId())
                .category(post.getCategory())
                .title(post.getTitle())
                .content(post.getContent())
                .build();
    }

    // get single post
    public PostDto getSinglePost(Long id){
        Post post = postRepository.findById(id).orElse(null);
        assert post != null;
        return PostDto.builder()
                .id(post.getId())
                .title(post.getTitle())
                .date(post.getDate())
                .category(post.getCategory())
                .content(post.getContent())
                .build();
    }

    // update post function
    public String updatePost(Long id, PostDto postDto){
        Post post = postRepository.findById(id).orElse(null);
        assert post != null;
        post.setTitle(postDto.getTitle());
        post.setContent(postDto.getContent());
        postRepository.save(post);
        return "post is updated sucessfully";
    }

    // delete post function
    public String deletePost(Long id){
        postRepository.deleteById(id);
        return "post is deleted";
    }

}
