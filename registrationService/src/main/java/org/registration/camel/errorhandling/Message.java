package org.registration.camel.errorhandling;

public class Message {

	private int status;
	private boolean isSuccessOrNot;
	private String message;

	public Message(int status, boolean isSuccessOrNot, String message) {
		this.status = status;
		this.isSuccessOrNot = isSuccessOrNot;
		this.message = message;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public boolean isSuccessOrNot() {
		return isSuccessOrNot;
	}

	public void setSuccessOrNot(boolean isSuccessOrNot) {
		this.isSuccessOrNot = isSuccessOrNot;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
