package com.course.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Course {
	@GetMapping("/getMessage")
	public String getMessage() {
		return "Welcome to My Channel";
	}

}
