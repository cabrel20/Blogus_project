package com.blogus.blogus.controllers;

import com.blogus.blogus.dto.PostDto;
import com.blogus.blogus.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    public void setPostService(PostService postService) {
        this.postService = postService;
    }

    private PostService postService;

    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public String createPost(@RequestBody PostDto postDto){
        return postService.createPost(postDto);
    }

    @GetMapping("/all")
    public List<PostDto> getAllPost(){
        return postService.getAllPost();
    }

    @GetMapping("/{id}")
    public PostDto getSinglePost(@PathVariable("id") Long id){
        return postService.getSinglePost(id);
    }

    @PutMapping("/{id}")
    public String updatePost(@PathVariable("id") Long id, @RequestBody PostDto postDto){
        return postService.updatePost(id,postDto);
    }

    @DeleteMapping("/{id}")
    public String deletePost(@PathVariable("id")Long id){
        return postService.deletePost(id);
    }
}
