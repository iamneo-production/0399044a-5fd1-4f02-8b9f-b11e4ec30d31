package com.course.student.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class StudentCourse {
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Integer courseid;
	private String coursename;
	private String courseduration;
	private String coursetimings;
	private Integer noofstudents;
	private String coursedescription;
	public Integer getCourseid() {
		return courseid;
	}
	public void setCourseid(Integer courseid) {
		this.courseid = courseid;
	}
	public String getCoursename() {
		return coursename;
	}
	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}
	public String getCourseduration() {
		return courseduration;
	}
	public void setCourseduration(String courseduration) {
		this.courseduration = courseduration;
	}
	public String getCoursetimings() {
		return coursetimings;
	}
	public void setCoursetimings(String coursetimings) {
		this.coursetimings = coursetimings;
	}
	public Integer getNoofstudents() {
		return noofstudents;
	}
	public void setNoofstudents(Integer noofstudents) {
		this.noofstudents = noofstudents;
	}
	public String getCoursedescription() {
		return coursedescription;
	}
	public void setCoursedescription(String coursedescription) {
		this.coursedescription = coursedescription;
	}
}
