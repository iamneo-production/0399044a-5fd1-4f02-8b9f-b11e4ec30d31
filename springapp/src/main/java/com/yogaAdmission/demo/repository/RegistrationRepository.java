package com.yogaAdmission.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yogaAdmission.demo.model.User;

public interface RegistrationRepository extends JpaRepository<User, Integer> {
	
	public User findByEmailId(String email);
	public User findByEmailIdAndPassword(String email, String password);

}
