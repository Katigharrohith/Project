package com.lti.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lti.entity.Insurance;

@Repository
public interface InsuranceRepository extends CrudRepository<Insurance, String>{

}
