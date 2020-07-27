package com.devops.springbootapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.devops.springbootapp.models.Task;
import com.devops.springbootapp.services.TaskService;

@RestController
public class TaskController {
	
	// Auto wire the TaskService class  
	@Autowired  
	TaskService taskService;  
	
	
	// Creating a get mapping that retrieves all the tasks detail from the database   
	@GetMapping("/tasks")  
	private List<Task> getAllTasks()   
	{  
		return taskService.getAllTasks();  
	}  
	
	// Creating a get mapping that retrieves the detail of a specific task  
	@GetMapping("/task/{taskid}")  
	private Task getTask(@PathVariable("taskid") int taskId)   
	{  
		return taskService.getTaskById(taskId);
	}  
	
	
	// Creating a delete mapping that deletes a specified task  
	@DeleteMapping("/task/{taskid}")
	private boolean deleteTask(@PathVariable("taskid") int taskId)
	{  
		taskService.delete(taskId);
		return true;
	}  
	
	
	// Creating post mapping that post the task detail in the database  
	@PostMapping("/task")
	private int saveTask(@RequestBody Task task)
	{  
		taskService.saveOrUpdate(task);
		return task.getTaskId(); 
	}  
	
	
	// Creating put mapping that updates the task detail   
	@PutMapping("/task")  
	private int updateTask(@RequestBody Task task)
	{  
		taskService.saveOrUpdate(task);  
		return task.getTaskId();
	}  

}
