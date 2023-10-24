package org.ram.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Helloworldcontroller {
	
	@GetMapping(path = "/basicauth")
	public String basicauthcheck() {
		return "succes"; 
	}
	
	
	
	@GetMapping(path = "/hello-world")
   public String helloWorld() {
		return "Hello World x"; 
	}
	
	@GetMapping(path = "/hello-world-bean")
	public Helloworldbean helloWorldBean() {
		return new Helloworldbean("Hello World bean"); 
	}
	
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public Helloworldbean helloWorldPathVariable(@PathVariable String name) {
		return new Helloworldbean(String.format("Hello World, %s", name)); 
	}	
}
