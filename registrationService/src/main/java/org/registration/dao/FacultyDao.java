package org.registration.dao;

import java.util.List;

import org.registration.model.Faculty;
import org.registration.repositories.FacultyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class FacultyDao {

	@Autowired
	private FacultyRepository facultyRepository;

	public void createFaculty(Faculty faculty) {
		facultyRepository.save(faculty);
	}

	public Faculty findFaculty(String id) {
		return facultyRepository.findOne(id);
	}
	
	public List<Faculty>findAll(){
		return facultyRepository.findAll();
	}
}
