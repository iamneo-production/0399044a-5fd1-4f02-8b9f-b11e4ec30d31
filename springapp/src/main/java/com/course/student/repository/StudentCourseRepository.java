package com.course.student.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.course.student.model.StudentCourse;
@Repository
public interface StudentCourseRepository extends CrudRepository<StudentCourse, Integer> {

}
