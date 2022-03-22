package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.entity.Insurance;
import com.lti.repository.InsuranceRepository;

@Service
public class Insuranceservice {
	@Autowired
	private InsuranceRepository insuranceRepository;
	public Insurance Insuranceapply(Insurance insurance) {
		return insuranceRepository.save(insurance);
		
	}

}
