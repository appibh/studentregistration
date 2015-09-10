package org.registration.camel.routes;

import org.apache.camel.spring.SpringRouteBuilder;

public class ValidateUserRouteBuilder extends SpringRouteBuilder{

	public static final String VALIDATE_USER = "direct:validateUser";

	@Override
	public void configure() throws Exception {
		from(VALIDATE_USER).to("bean:userService?method=validateUser");		
	}

}
