package org.registration.dao;

import java.util.List;

import org.registration.model.User;
import org.registration.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao{

	@Autowired
	public UserRepository userRepository;
	
	//find by primary key
	public User findUser(String userId){
		return userRepository.findOne(userId);
	}
	
	public List<User> findUserByFirstName(String first){
		return userRepository.findUersByFirstName(first);
	}
	
	public User createUser(User user){
		return userRepository.save(user);
	}
	
	public void updateUser(User user){
		userRepository.save(user);
	}
	
	public void deleteUser(User user){
		userRepository.delete(user);
	}
	
	
}
