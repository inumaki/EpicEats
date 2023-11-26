package com.example.backend.security;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.PrintWriter;

@Component
public class JwtEntryPoint implements AuthenticationEntryPoint {
    @Override
    //Whenever an unauthenticated person will try to access the authenticated resource this code will execute
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
            throws IOException, ServletException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json"); // Set response content type to JSON
        PrintWriter writer = response.getWriter();
        writer.println("{\"error\": \"Access Denied\", \"message\": \"" + authException.getMessage() + "\"}");
    }
}