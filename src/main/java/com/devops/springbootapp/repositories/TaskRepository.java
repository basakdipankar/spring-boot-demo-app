package com.devops.springbootapp.repositories;

import org.springframework.data.repository.CrudRepository;
import com.devops.springbootapp.models.Task;

public interface TaskRepository extends CrudRepository<Task, Integer>{
	
}
