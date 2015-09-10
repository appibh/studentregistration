package org.registration.camel.routes;

import org.apache.camel.spring.SpringRouteBuilder;

public class CreateUserRouteBuilder extends SpringRouteBuilder{
	
	public static final String  CREATE_USER = "direct:registerToSystem";
	
	@Override
	public void configure() throws Exception {
		from(CREATE_USER).processRef("userProcessor").to("bean:userService?method=createUser");
	}
}
