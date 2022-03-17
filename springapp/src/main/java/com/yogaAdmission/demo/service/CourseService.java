package com.yogaAdmission.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yogaAdmission.demo.model.Course;
import com.yogaAdmission.demo.repository.CourseRepository;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository repository;
	
	public Course saveCourse(Course course) {
		return repository.save(course);
	}
	
	public List<Course> showCourse() {
		return repository.findAll();
	}
	
	public void deleteCourse(int id) {
		repository.deleteById(id);
	}
	
	public Course updateCourse(Course course) {
		Course existingCourse = repository.findById(course.getId()).orElse(null);
		existingCourse.setId(course.getId());
		existingCourse.setCourseName(course.getCourseName());
		existingCourse.setCourseSpan(course.getCourseSpan());
		existingCourse.setCourseTime(course.getCourseTime());
		existingCourse.setStudentCount(course.getStudentCount());
		existingCourse.setDescription(course.getDescription());
		return repository.save(existingCourse);
	}
	
	public Optional<Course> getCourseId(int id) {
		return repository.findById(id);
	}

}
