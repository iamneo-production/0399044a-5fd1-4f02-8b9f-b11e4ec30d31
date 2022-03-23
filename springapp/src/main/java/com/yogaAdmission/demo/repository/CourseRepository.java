package com.yogaAdmission.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yogaAdmission.demo.model.Course;

public interface CourseRepository extends JpaRepository<Course, Integer> {

}
