package com.example.backend.Response;

import lombok.Builder;

@Builder
public class JwtResponse {

    public String username;
    public String jwtToken;

}
