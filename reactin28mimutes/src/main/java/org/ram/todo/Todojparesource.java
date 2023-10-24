package org.ram.todo;

import java.util.List;

import org.ram.todo.repo.Todorepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Todojparesource {
     

	     
	    @Autowired
		private Todorepositary todorepo;


	 
	 
	@GetMapping("/users/{username}/todos")
	public List<Todo> retrievetodos(@PathVariable String username) {
		
		return todorepo.findAll();
	}

	@GetMapping("/users/{username}/todos/{id}")
	public Todo retrievetodo(@PathVariable String username,@PathVariable int id) {
		return todorepo.findById(id).get();
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deletetodo(@PathVariable String username,@PathVariable int id) {
	   todorepo.deleteById(id);
	   return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public Todo updatetodo(@PathVariable String username,@PathVariable int id,
			@RequestBody Todo todo) {
	   todorepo.save(todo);
	   return todo;
	}
		
	@PostMapping("/users/{username}/todos")
	public Todo createtodo(@PathVariable String username,
			@RequestBody Todo todo) {
		todo.setUsername(username);
		todo.setId(null);
		return todorepo.save(todo);
//	  Todo newtodo= todoservice.addTodo(username, todo.getDescription(), todo.getTargetDate(),todo.getDone());
//	   
	  
	 // return newtodo;
	}
	
	
}
