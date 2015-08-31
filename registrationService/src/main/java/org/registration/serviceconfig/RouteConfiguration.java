package org.registration.serviceconfig;

import org.apache.camel.spring.javaconfig.CamelConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("org.registration.camel.routes")
public class RouteConfiguration extends CamelConfiguration{

}
