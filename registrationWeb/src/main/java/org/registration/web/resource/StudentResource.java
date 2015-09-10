package org.registration.web.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.apache.camel.ProducerTemplate;
import org.registration.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Path("/student")
public class StudentResource {
	
	@Autowired
	private ProducerTemplate producerTemplate;

	@Path("/get")
	@GET
	@Produces("application/json")
	public User getStudent(){
		User u1 = new User();
		u1.setFirstName("ravi");
		u1.setLastName("thota");
		u1.setEmailId("ravithota@gmail.com");
		return u1;
	}
	
}
