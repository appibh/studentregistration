package org.registration.repositories;

import java.util.List;

import org.registration.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository  extends MongoRepository<User, String>{
	
	@Query("{'firstName' : ?0}")//?0 represents first parameter	
	public List<User> findUersByFirstName(String firstName);
	
}
