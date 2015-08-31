package org.registration.camel.errorhandling;

import javax.ws.rs.core.Response;

import org.springframework.stereotype.Component;

@Component
public class SuccessHandler {

	public Response processSuccess() {
		return Response.status(200).entity(new Message(200, true, "Request Successfull")).build();
	}

}
