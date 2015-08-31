package org.registration.camel.errorhandling;

import javax.ws.rs.core.Response;

import org.springframework.stereotype.Component;

@Component
public class ExceptionHandler {

	public Response processException(Exception exception) {
		return Response.status(500).entity(new Message(500,false,exception.getMessage())).build();
	}
}
