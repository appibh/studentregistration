package org.registration.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="courses")
public class Course implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	private String courseId;
	private String courseName;
	
	@DBRef
	private Faculty facultyMember;

	private Set<Course> preReqs;
	
	private Date createdDate;
	
	private Date lastModifiedDate;
	
	private boolean active;

	public String getCourseId() {
		return courseId;
	}

	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public Faculty getFacultyMember() {
		return facultyMember;
	}


	public void setFacultyMember(Faculty facultyMember) {
		this.facultyMember = facultyMember;
	}

	public Set<Course> getPreReqs() {
		return preReqs;
	}

	public void setPreReqs(Set<Course> preReqs) {
		this.preReqs = preReqs;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getLastModifiedDate() {
		return lastModifiedDate;
	}

	public void setLastModifiedDate(Date lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Course [courseId=" + courseId + ", courseName=" + courseName + ", facultyMember=" + facultyMember + ", preReqs=" + preReqs + ", createdDate=" + createdDate + ", lastModifiedDate="
				+ lastModifiedDate + ", active=" + active + "]";
	}


}
