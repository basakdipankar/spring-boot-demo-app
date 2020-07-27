package com.devops.springbootapp;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.devops.springbootapp.controllers.CalculatorController;
import com.devops.springbootapp.controllers.MessageController;

@SpringBootTest
class SpringBootAppApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Test
	public void testMessage() {
		MessageController msg = new MessageController();
		System.out.println("Testing If message is 'Hello, World'");
		Assertions.assertEquals(msg.sayHello(), "Hello, World");
	}
	
	@Test
	public void testNotMessage() {
		MessageController msg = new MessageController();
		System.out.println("Testing If message is not 'Hello'");
		Assertions.assertNotEquals("Hello", msg.sayHello());
	}
	
	@Test
	public void testAddition() {
		CalculatorController cal = new CalculatorController();
		System.out.println("Testing addition");
		Assertions.assertEquals(cal.addition(), 20);
	}
	
	@Test
	public void testNotAddition() {
		CalculatorController cal = new CalculatorController();
		System.out.println("Testing if addition is other than 20");
		Assertions.assertFalse(cal.addition()!=20);
	}
	
	@Test
	public void testMultiplication() {
		CalculatorController cal = new CalculatorController();
		System.out.println("Testing multiplication");
		Assertions.assertEquals(cal.multiplication(), 100);
	}
	
	@Test
	public void testNotMultiplication() {
		CalculatorController cal = new CalculatorController();
		System.out.println("Testing if multiplicationis other than 100");
		Assertions.assertFalse(cal.multiplication()!=100);
	}
	
	@Test
	public void testDivision() {
		CalculatorController cal = new CalculatorController();
		System.out.println("Testing division");
		Assertions.assertEquals(cal.division(), 10);
	}
	
	@Test
	public void testNotDivision() {
		CalculatorController cal = new CalculatorController();
		System.out.println("Testing if division is other than 10");
		Assertions.assertFalse(cal.division()!=10);
	}
	
	@Test
	public void testRemainder() {
		CalculatorController cal = new CalculatorController();
		System.out.println("Testing remainder");
		Assertions.assertEquals(cal.remainder(), 1);
	}
	
	@Test
	public void testNotRemainder() {
		CalculatorController cal = new CalculatorController();
		System.out.println("Testing if remainder is other than 1");
		Assertions.assertFalse(cal.remainder()!=1);
	}
}
