package com.yogaAdmission.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yogaAdmission.demo.model.Academy;
import com.yogaAdmission.demo.repository.AcademyRepository;

@Service
public class AcademyService {
	
	@Autowired
	private AcademyRepository repository;
	
	public Academy saveAcademy(Academy academy) {
		return repository.save(academy);
	}
	
	public List<Academy> showAcademy() {
		return repository.findAll();
	}
	
	public void deleteAcademy(int id) {
		repository.deleteById(id);
	}
	
	public Academy updateAcademy(Academy academy) {
		Academy existingAcademy = repository.findById(academy.getId()).orElse(null);
		existingAcademy.setAcademyName(academy.getAcademyName());
		existingAcademy.setContactNumber(academy.getContactNumber());
		existingAcademy.setDescription(academy.getDescription());
		existingAcademy.setEmail(academy.getEmail());
		existingAcademy.setImageUrl(academy.getImageUrl());
		existingAcademy.setLocation(academy.getLocation());
		return repository.save(existingAcademy);
	}
	
	public Optional<Academy> getAcademyId(int id) {
		return repository.findById(id);
	}

}
