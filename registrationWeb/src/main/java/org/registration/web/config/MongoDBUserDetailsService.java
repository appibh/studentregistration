package org.registration.web.config;


import org.apache.camel.ProducerTemplate;
import org.registration.camel.routes.ValidateUserRouteBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MongoDBUserDetailsService implements UserDetailsService {

	@Autowired
	private ProducerTemplate producerTemplate;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDetails loadedUser;

        try {
            loadedUser = (UserDetails) producerTemplate.requestBodyAndHeaders(ValidateUserRouteBuilder.VALIDATE_USER, username, null, User.class);
        } catch (Exception repositoryProblem) {
        	repositoryProblem.printStackTrace();
            throw new InternalAuthenticationServiceException(repositoryProblem.getMessage(), repositoryProblem);
        }

        if (loadedUser == null) {
            throw new InternalAuthenticationServiceException(
                    "UserDetailsService returned null, which is an interface contract violation");
        }
        return loadedUser;
    }
}
