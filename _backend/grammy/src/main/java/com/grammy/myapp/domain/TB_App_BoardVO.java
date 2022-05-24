package com.grammy.myapp.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TB_App_BoardVO {
	private int tb_a_seq;
	private String tb_a_title;
	private String tb_a_content;
	private String tb_a_date;
	private String user_id;
	private String user_name;
	

}
