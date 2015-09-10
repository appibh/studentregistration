package org.registration.camel.processor;

import java.util.Date;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.registration.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserProcessor implements Processor{

	@Override
	public void process(Exchange exchange) throws Exception {
		User user = exchange.getIn().getBody(User.class);
		user.setCreatedDate(new Date());
		user.setLastModifiedDate(new Date());
	}

}
