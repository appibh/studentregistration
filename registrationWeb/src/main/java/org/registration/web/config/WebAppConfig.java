package org.registration.web.config;

import org.registration.serviceconfig.ServiceConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(value={ServiceConfiguration.class})
@ComponentScan(basePackages={"org.registration.web.resource"})
public class WebAppConfig {

}
