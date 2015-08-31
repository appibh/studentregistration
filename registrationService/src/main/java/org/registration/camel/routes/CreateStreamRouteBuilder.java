package org.registration.camel.routes;

import org.apache.camel.spring.SpringRouteBuilder;

//@Component
public class CreateStreamRouteBuilder extends SpringRouteBuilder {

	public static final String CREATE_STREAM = "direct:createStream";
	// private static final String STREAM_ENTITY = "streamEntity";

	@Override
	public void configure() throws Exception {
		onException(Exception.class).to("bean:exceptionHandler?method=processException");
		// from(CREATE_STREAM).id("createStream").setHeader(STREAM_ENTITY,body()).to("bean:streamService?method=createStream");
		from(CREATE_STREAM).id("createStream").processRef("streamProcessor")
				.to("bean:streamService?method=createStream").to("bean:successHandler?method=processSuccess");
	}

}
