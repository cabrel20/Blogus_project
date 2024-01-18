package com.blogus.blogus.services;

import com.blogus.blogus.dto.UserDto;
import com.blogus.blogus.entities.User;
import com.blogus.blogus.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private UserRepository userRepository;

    public User createUser(User user){
        return userRepository.save(user);
    }
    public List<UserDto> getAllUser(){
        List<User> users = userRepository.findAll();
        List<UserDto> userDtos = new ArrayList<>();
        UserDto userDto;
        for (User user : users) {
            userDto = new UserDto(user.getId(), user.getUserName(), user.getBiographie(), user.getDateInscription(), user.getPosts());
            userDtos.add(userDto);
        }
        return userDtos;
    }

    public UserDto getSingleUser(Long id){
        User user = userRepository.findById(id).orElse(null);
        return new UserDto(user.getId(), user.getUserName(), user.getBiographie(), user.getDateInscription(), user.getPosts());
    }

}
