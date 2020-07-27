package com.devops.springbootapp.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devops.springbootapp.models.Task;
import com.devops.springbootapp.repositories.TaskRepository;

@Service
public class TaskService {
	
	@Autowired
	TaskRepository taskRepository;
	
	//getting all tasks by using the method findaAll() of CrudRepository  
	public List<Task> getAllTasks()   
	{  
		List<Task> tasks = new ArrayList<Task>();  
		taskRepository.findAll().forEach(task -> tasks.add(task));  
		return tasks;  
	}  
	
	//getting a specific task by using the method findById() of CrudRepository  
	public Task getTaskById(int id)   
	{  
		return taskRepository.findById(id).get();  
	}  
	
	//saving a specific task by using the method save() of CrudRepository  
	public void saveOrUpdate(Task task)   
	{  
		taskRepository.save(task);  
	} 
	
	//deleting a specific task by using the method deleteById() of CrudRepository  
	public void delete(int id)   
	{  
		taskRepository.deleteById(id);  
	}  
	
	//updating a task  
	public void update(Task task, int taskId)   
	{  
		taskRepository.save(task);  
	}  
}
