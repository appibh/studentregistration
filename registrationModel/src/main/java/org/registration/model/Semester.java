package org.registration.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.DBRef;

public class Semester {

	private int number;
	private String name;
	
	@DBRef
	private List<Course> registeredCourses;

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Course> getRegisteredCourses() {
		return registeredCourses;
	}
	
	public void setRegisteredCourses(List<Course> registeredCourses) {
		this.registeredCourses = registeredCourses;
	}

}
