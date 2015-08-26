package org.registration.dao;

import java.util.List;

import org.registration.model.Course;
import org.registration.model.Stream;
import org.registration.repositories.StreamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class StreamDao{

	@Autowired
	private StreamRepository streamRepository;
	
	@Autowired
	private MongoTemplate mongoTemplate;
	
	public void createStream(Stream stream){
		streamRepository.save(stream);
	}
	
	public Stream findStream(String name){
		return streamRepository.findOne(name);
	}
	
	public void createCourses(List<Course> courses){
		courses.forEach(course -> createCourse(course));
	}
	
	public void createCourse(Course course){
		mongoTemplate.save(course);
	}
	
	
}
