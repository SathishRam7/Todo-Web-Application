package org.ram.todo.repo;

import java.util.List;

import org.ram.todo.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Todo .. Integer

@Repository
public interface Todorepositary extends JpaRepository<Todo, Integer>{

	
	
}
