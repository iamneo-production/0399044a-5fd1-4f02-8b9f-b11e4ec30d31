package com.course.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.course.student.model.StudentCourse;
import com.course.student.repository.StudentCourseRepository;

@Service
public class CourseService {

	@Autowired
	private StudentCourseRepository courseRepository;
	
	public StudentCourse registerStudent(StudentCourse course) {
		return courseRepository.save(course);
	}
	public List<StudentCourse> getStudents(){
		return (List<StudentCourse>) courseRepository.findAll();
	}
	
	public void deleteStudent(Integer id) {
		courseRepository.deleteById(id);
	}
	
	public StudentCourse updateCourse(StudentCourse student) {
		Integer courseId= student.getCourseid();
		StudentCourse std= courseRepository.findById(courseId).get();
		std.setCoursename(student.getCoursename());
		std.setCourseduration(student.getCourseduration());
		std.setCoursetimings(student.getCoursetimings());
		std.setNoofstudents(student.getNoofstudents());
		std.setCoursedescription(student.getCoursedescription());
		return courseRepository.save(std);
	}
}
