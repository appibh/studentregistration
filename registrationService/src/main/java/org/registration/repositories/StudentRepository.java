package org.registration.repositories;

import java.util.List;

import org.registration.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface StudentRepository  extends MongoRepository<Student, String>{
	
	@Query("{'firstName' : ?0}")//?0 represents first parameter	
	public List<Student> findStudentsByFirstName(String firstName);
	
}
