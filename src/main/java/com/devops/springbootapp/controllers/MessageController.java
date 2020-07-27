package com.devops.springbootapp.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class MessageController {
	@GetMapping("/hello")
	public String sayHello() {
		return "Hello, World";
	}
}
