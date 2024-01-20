package com.blogus.blogus.services;

import com.blogus.blogus.dto.UserDto;
import com.blogus.blogus.entities.User;
import com.blogus.blogus.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private UserRepository userRepository;

    public String createUser(UserDto userDto){
        User user = User.builder()
                .userName(userDto.getUserName())
                .email(userDto.getEmail())
                .password(userDto.getPassword())
                .dateInscription(userDto.getDateInscription())
                .build();
        userRepository.save(user);
        return "User is created with sucess";
    }

    // get all user function
    public List<UserDto> getAllUser(){
        List<User> users = userRepository.findAll();
        return users.stream().map(this::userToMap).toList();
    }

    // map user function(used in getAllUser function)
    private UserDto userToMap(User user) {
        return UserDto.builder()
                .userName(user.getUserName())
                .email(user.getEmail())
                .id(user.getId())
                .biographie(user.getBiographie())
                .dateInscription(user.getDateInscription())
                .build();
    }

    // update user data function
    public String updatedUser(Long id,UserDto userDto) {

        User user = userRepository.findById(id).orElse(null);
        user.setUserName(userDto.getUserName());
        user.setEmail(userDto.getEmail());
        user.setBiographie(userDto.getBiographie());
        user.setPassword(userDto.getPassword());
        System.out.println(user.getBiographie());
        userRepository.save(user);
        return "User is updated now";
    }

    // get signle user
    public UserDto getSingleUser(Long id){
        User user = userRepository.findById(id).orElse(null);
        UserDto userDto = UserDto.builder()
                .userName(user.getUserName())
                .email(user.getEmail())
                .id(user.getId())
                .biographie(user.getBiographie())
                .dateInscription(user.getDateInscription())
                .build();

        return userDto;
    }


}
