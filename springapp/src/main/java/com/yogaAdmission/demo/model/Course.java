package com.yogaAdmission.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AddedCourse")
public class Course {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String courseName;
	private String courseSpan;
    private String courseTime;
    private int studentCount;
    @Column(length = 5000)
    private String description;
    
    public Course(){
    	
    }
    
    
	public Course(int id, String courseName, String courseSpan, String courseTime, int studentCount,
			String description) {
		super();
		this.id = id;
		this.courseName = courseName;
		this.courseSpan = courseSpan;
		this.courseTime = courseTime;
		this.studentCount = studentCount;
		this.description = description;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getCourseSpan() {
		return courseSpan;
	}
	public void setCourseSpan(String courseSpan) {
		this.courseSpan = courseSpan;
	}
	public String getCourseTime() {
		return courseTime;
	}
	public void setCourseTime(String courseTime) {
		this.courseTime = courseTime;
	}
	public int getStudentCount() {
		return studentCount;
	}
	public void setStudentCount(int studentCount) {
		this.studentCount = studentCount;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	

}
