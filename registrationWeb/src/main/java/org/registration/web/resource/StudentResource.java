package org.registration.web.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.registration.model.Name;
import org.registration.model.Student;
import org.springframework.stereotype.Component;

@Component
@Path("/student")
public class StudentResource {

	@Path("/get")
	@GET
	@Produces("application/json")
	public Student getStudent(){
		Student s1 = new Student();
		s1.setName(new Name("ravi", "thota", ""));
		s1.setId("ravitho");
		return s1;
	}
}
