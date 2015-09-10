package org.registration.web.resource;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.camel.ProducerTemplate;
import org.registration.camel.routes.CreateUserRouteBuilder;
import org.registration.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Path("/user")
public class UserResource {
	
	@Autowired
	private ProducerTemplate producerTemplate;

	@Path("/create")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public User registerToSystem(User user){
		System.out.println(user);
		User registeredUser = (User)producerTemplate.requestBodyAndHeaders(CreateUserRouteBuilder.CREATE_USER, user, null, User.class);
		return registeredUser;
	}

}
