package org.registration.camel.processor;

import java.util.Date;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.registration.model.Stream;
import org.springframework.stereotype.Component;

@Component
public class StreamProcessor implements Processor {

	@Override
	public void process(Exchange exchange) throws Exception {
		Stream stream = exchange.getIn().getBody(Stream.class);
		if (stream.getCreatedDate() == null) {
			stream.setCreatedDate(new Date());
			stream.setLastModifiedDate(new Date());
		} else {
			stream.setLastModifiedDate(new Date());
		}
	}

}
