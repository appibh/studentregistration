package org.registration.model;

public class Name {

	private String firstName;
	private String lastName;
	private String middleName;
	
	public Name(String first, String last, String middle){
		this.firstName = first;
		this.lastName = last;
		this.middleName = middle;
	}
	
	public Name(){
		
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	@Override
	public String toString() {
		return "Name [firstName=" + firstName + ", lastName=" + lastName + ", middleName=" + middleName + "]";
	}

}
