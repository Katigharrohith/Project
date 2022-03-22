package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.ApplyInsurance;
import com.lti.entity.Insurance;
import com.lti.service.ClaimInsuranceservice;
import com.lti.service.Insuranceservice;

@RestController
public class ClaimInsuranceController {
	@Autowired 
	private ClaimInsuranceservice cservice;
	@PostMapping("/claimInsurance")
	public ApplyInsurance claim(@RequestBody ApplyInsurance appinsurance) {
		return cservice.claim(appinsurance);

	}
}


