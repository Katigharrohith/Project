package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.Insurance;
import com.lti.service.Insuranceservice;

@RestController
public class Insurancecontroller {
	@Autowired
	private Insuranceservice insuranceService;
	@PostMapping("/applyInsurance")
	public Insurance insuranceapply(@RequestBody Insurance insurance ) {
		return insuranceService.Insuranceapply(insurance);
		
	}

}
