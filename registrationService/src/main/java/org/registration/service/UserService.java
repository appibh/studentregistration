package org.registration.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

	public User validateUser(String userId);

	public org.registration.model.User createUser(org.registration.model.User user);


}
