package org.registration.dao;

import java.util.List;

import org.registration.model.Student;
import org.registration.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class StudentDao{

	@Autowired
	public StudentRepository studentRepository;
	
	//find by primary key
	public Student findStudent(String studentId){
		return studentRepository.findOne(studentId);
	}
	
	public List<Student> findStudentByFirstName(String first){
		return studentRepository.findStudentsByFirstName(first);
	}
	
	public void createStudent(Student student){
		studentRepository.save(student);
	}
	
	public void updateStudent(Student student){
		studentRepository.save(student);
	}
	
	public void deleteStudent(Student student){
		studentRepository.delete(student);
	}
	
	
}
