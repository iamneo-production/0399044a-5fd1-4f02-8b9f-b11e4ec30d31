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

import com.yogaAdmission.demo.model.Academy;
import com.yogaAdmission.demo.service.AcademyService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AcademyController {
	
	@Autowired
	private AcademyService service;
	
	@PostMapping("/admin/addAcademy")
	public Academy addAcademy(@RequestBody Academy academy) {
		return service.saveAcademy(academy);
	}
	
	@GetMapping("admin/viewAcademy")
	public List<Academy> findAcademy(){
		return service.showAcademy();
	}
	
	@PutMapping("/admin/updateAcademy")
	public Academy updateAcademy(@RequestBody Academy academy){
		return service.updateAcademy(academy);
	}
	
	@DeleteMapping("/admin/deleteAcademy")
	public void deleteAcademy(@RequestParam int id) {
			service.deleteAcademy(id);	
	}
	
	@GetMapping("/admin/getAcademy")
	public Optional<Academy> getAcademyById(@RequestParam int id) {
		return service.getAcademyId(id);
	}

}
