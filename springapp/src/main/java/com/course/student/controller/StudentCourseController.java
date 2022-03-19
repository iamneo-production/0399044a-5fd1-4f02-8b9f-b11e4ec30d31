package com.course.student.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.course.student.model.StudentCourse;
import com.course.student.service.CourseService;

@RestController
@CrossOrigin(allowedHeaders="*",origins="*")
public class StudentCourseController {
	
	@Autowired
	private CourseService studentCourseService;
	
	@PostMapping("/registerCourse")
	public StudentCourse registerCourse(@RequestBody StudentCourse course) {
		return studentCourseService.registerStudent(course);
	}
	
	@GetMapping("/getCourse")
	public List<StudentCourse> getCourse(){
		return studentCourseService.getStudents();
	}
	
	@DeleteMapping("/deleteCourse")
	public void deleteCourse(@RequestParam Integer id) {
		studentCourseService.deleteStudent(id);
	}
	
	@PutMapping("/updateCourse")
	public StudentCourse updateCourse(@RequestBody StudentCourse course) {
		return studentCourseService.updateCourse(course);
	} 
}