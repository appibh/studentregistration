package org.registration.serviceconfig;

import java.net.UnknownHostException;
import java.util.Arrays;

import org.apache.camel.CamelContext;
import org.apache.camel.ProducerTemplate;
import org.apache.camel.impl.DefaultCamelContext;
import org.apache.camel.osgi.SpringCamelContextFactory;
import org.apache.camel.spring.SpringCamelContext;
import org.registration.camel.routes.CreateStreamRouteBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;

@Configuration
@EnableMongoRepositories(basePackages = { "org.registration.repositories" })
// @EnableMongoAuditing
@ComponentScan(basePackages = { "org.registration.dao", "org.registration.service","org.registration.camel.processor","org.registration.camel.errorhandling"})
@PropertySource("classpath:application.properties")
//@Import(value={RouteConfiguration.class})
public class ServiceConfiguration {

	@Autowired
	private Environment env;
	
	@Autowired
	private ApplicationContext applicationContext;

	@Bean
	public MongoTemplate mongoTemplate() throws UnknownHostException {
		return new MongoTemplate(mongo(), env.getProperty("db.name"));
	}

	public Mongo mongo() throws UnknownHostException {
		ServerAddress address = new ServerAddress(env.getProperty("db.host"),
				env.getProperty("db.port", Integer.class));
		MongoCredential mc = MongoCredential.createCredential(env.getProperty("db.username"),
				env.getProperty("db.name"), env.getProperty("db.password").toCharArray());
		Mongo mongo = new MongoClient(address, Arrays.asList(mc));
		return mongo;
	}
	
	@Bean
	public CamelContext camelContext() throws Exception{
	      
		CamelContext camelContext = new SpringCamelContext(applicationContext);
		camelContext.start();
		camelContext.addRoutes(new CreateStreamRouteBuilder());
		return camelContext;
	}
	

	@Bean
	public ProducerTemplate createProducerTemplate() throws Exception{
		return camelContext().createProducerTemplate();
	}
}
