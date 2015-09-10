package org.registration.web.config;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private MongoDBUserDetailsService mongoDBUserDetailsService;
    
    @Autowired
    private EntryPointUnauthorizedHandler unauthorizedHandler;
    
    @Autowired
    private AuthFailure authFailure;

    @Autowired
    private AuthSuccess authSuccess;


//    @Override
//    public void configure(WebSecurity web) throws Exception {
//        web.ignoring().antMatchers("/js/**", "/css/**");
//    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http.formLogin().defaultSuccessUrl("/home.html")
//                .and().logout().and().authorizeRequests()
//                .antMatchers("/index.html", "/home.html", "/login", "/", "/access", "/logout").permitAll().anyRequest()
//                .authenticated()
//                .and().csrf().disable();
    	 http
         .csrf().disable()
         .exceptionHandling()
             .authenticationEntryPoint(unauthorizedHandler)
             .and()
         .formLogin()
             .successHandler(authSuccess)
             .failureHandler(authFailure)
         .and()
         .authorizeRequests()
             .antMatchers("/**")
                 .permitAll();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(mongoDBUserDetailsService);
    }
    
    @Autowired
    public void configAuthBuilder(AuthenticationManagerBuilder builder) throws Exception {
        builder.userDetailsService(mongoDBUserDetailsService);
    }
}
