package org.registration.web.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.camel.ProducerTemplate;
import org.registration.camel.routes.CreateStreamRouteBuilder;
import org.registration.model.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Path("/stream")
public class StreamResource {
	
	@Autowired
	private ProducerTemplate producerTemplate;
	
	@GET
	@Path("/create")
	@Produces(MediaType.APPLICATION_JSON)
	public Response createStream(){
		Stream s1 = new Stream();
		s1.setName("ECE");
		return producerTemplate.requestBodyAndHeaders(CreateStreamRouteBuilder.CREATE_STREAM, s1,null,Response.class);
	}

}
