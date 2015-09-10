package org.registration.service;

import org.registration.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao userDao;


	@Override
	public User validateUser(String userId) {
		org.registration.model.User user = null;
		user = userDao.findUser(userId);

		if (user == null) {
			return null;
		} else {
			User springUser = new User(user.getEmailId(), user.getPassword(),AuthorityUtils.createAuthorityList(user.getRole().name()));
			return springUser;
		}

	}
	
	@Override
	public org.registration.model.User createUser(org.registration.model.User user){
		user = userDao.createUser(user);
		return user;
	}

}
