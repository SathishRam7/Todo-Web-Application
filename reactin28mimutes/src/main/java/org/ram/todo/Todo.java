package org.ram.todo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="todos")
public class Todo {
    
	@Id
	@GeneratedValue
	private Integer id;
	
	  @Column(name = "username")
	private String username;
	
	  @Column(name = "description")
	private String description;
	  
	  @Column(name = "targetDate")
	private LocalDate targetDate;
	  
	  @Column(name = "done")
	private  String done;
	public Todo() {
		
	}
	
	public Todo(Integer id, String username, String description, LocalDate targetDate, String done) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.done = done;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDate getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(LocalDate targetDate) {
		this.targetDate = targetDate;
	}



	@Override
	public String toString() {
		return "Todo [id=" + id + ", username=" + username + ", description=" + description + ", targetDate="
				+ targetDate + ", done=" + done + "]";
	}

	public String getDone() {
		return done;
	}

	public void setDone(String done) {
		this.done = done;
	}




}