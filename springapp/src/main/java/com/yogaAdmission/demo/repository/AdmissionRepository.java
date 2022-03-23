package com.yogaAdmission.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yogaAdmission.demo.model.Admission;

public interface AdmissionRepository extends JpaRepository<Admission, Integer> {

}
