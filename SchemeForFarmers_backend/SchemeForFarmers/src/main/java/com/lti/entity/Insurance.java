package com.lti.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name="insurance")
public class Insurance{
	@Id
	@Column(name="InsuranceId")
	private String insuranceid;
	private double amount;
	private String insurancecompanyname;
	@OneToOne
	@JoinColumn(name= "Crop_id") //FK

	private Crop crop;
	public String getInsuranceid() {
		return insuranceid;
	}
	public void setInsuranceid(String insuranceid) {
		this.insuranceid = insuranceid;
	}
	public Crop getCrop() {
		return crop;
	}
	public void setCrop(Crop crop) {
		this.crop = crop;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getInsurancecompanyname() {
		return insurancecompanyname;
	}
	public void setInsurancecompanyname(String insurancecompanyname) {
		this.insurancecompanyname = insurancecompanyname;
	}
}