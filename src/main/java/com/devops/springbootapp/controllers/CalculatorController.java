package com.devops.springbootapp.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {
	
	@GetMapping("/add")
	public int addition() {
		return 10+10;
	}
	
	@GetMapping("/multiply")
	public int multiplication() {
		return 10*10;
	}
	
	@GetMapping("/divide")
	public int division() {
		return 100/10;
	}
	
	@GetMapping("/remain")
	public int remainder() {
		return 100%9;
	}
}
