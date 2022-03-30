package com.yogaAdmission.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yogaAdmission.demo.model.Course;
import com.yogaAdmission.demo.service.CourseService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CourseController {
	
	@Autowired
	private CourseService service;
	
	@PostMapping("/admin/addCourse")
	public Course addCourse(@RequestBody Course course) {
		return service.saveCourse(course);
	}
	
	@GetMapping("admin/searchCourse")
	public List<Course> findCourse(){
		return service.showCourse();
	}
	
	@PutMapping("/admin/updateCourse")
	public Course updateCourse(@RequestBody Course course){
		return service.updateCourse(course);
	}
	
	@DeleteMapping("/admin/deleteCourse")
	public void deleteCourse(@RequestParam int id) {
			service.deleteCourse(id);	
	}
	
	@GetMapping("/admin/viewCourse")
	public Optional<Course> getCourseById(@RequestParam int id) {
		return service.getCourseId(id);
	}

}
