package com.example.backend.controller;

import com.example.backend.Response.JwtResponse;
import com.example.backend.model.User;
import com.example.backend.request.UserLogin;
import com.example.backend.security.JwtHelper;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class Auth {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtHelper helper;

    @PostMapping("/signin")
        public String signin(@RequestBody User user) {
            return this.userService.saveNewUser(user);
    }

    @PostMapping("/login")
        public ResponseEntity<JwtResponse> login(@RequestBody UserLogin userLogin) {
           return  userService.login(userLogin);
        }
}
