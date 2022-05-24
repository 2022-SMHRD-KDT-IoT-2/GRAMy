package com.grammy.myapp.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TB_UserVO {
	private long user_seq;
	private String user_id;
	private String user_pw;
	private String user_phone;
	private String user_addr;
	private String user_role;
	private String user_joindate;
	private String user_name;
	private String user_gender;
	
	
	
	

}
