package com.yogaAdmission.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yogaAdmission.demo.model.Academy;

public interface AcademyRepository extends JpaRepository<Academy, Integer> {

}
