package com.blogus.blogus.controllers;

import com.blogus.blogus.dto.UserDto;
import com.blogus.blogus.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {


    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    private UserService userService;

    @PostMapping
    public String createUser(@RequestBody UserDto userDto){
        return userService.createUser(userDto);
    }

    @GetMapping("/all")
    public List<UserDto> getAllUser(){
        return userService.getAllUser();
    }

    @PutMapping("/{id}")
    public String userUpdated(@PathVariable("id") Long id,@RequestBody UserDto userDto){
        return userService.updatedUser(id,userDto);
    }

    @GetMapping("/{id}")
    public UserDto getSingleUser(@PathVariable("id")Long id){
        return userService.getSingleUser(id);
    }
}
