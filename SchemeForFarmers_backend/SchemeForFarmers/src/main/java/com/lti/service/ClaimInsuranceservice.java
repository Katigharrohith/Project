package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.entity.ApplyInsurance;
import com.lti.entity.Insurance;
import com.lti.repository.ClaimInsuranceRepository;
import com.lti.repository.InsuranceRepository;

@Service
public class ClaimInsuranceservice {
	@Autowired
	private ClaimInsuranceRepository cinsuranceRepository;
	public ApplyInsurance claim(ApplyInsurance appinsurance) {
		return  cinsuranceRepository.save(appinsurance);
		
	}

}

