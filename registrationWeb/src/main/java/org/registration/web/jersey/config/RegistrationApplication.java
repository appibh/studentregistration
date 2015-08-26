package org.registration.web.jersey.config;

import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.spring.scope.RequestContextFilter;
import org.registration.web.resource.StudentResource;

public class RegistrationApplication extends ResourceConfig {
	public RegistrationApplication(){
		register(RequestContextFilter.class);
		register(StudentResource.class);
		register(JacksonFeature.class);	
	}

}
