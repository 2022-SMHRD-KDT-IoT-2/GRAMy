package com.grammy.myapp.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TB_PurchaseVO {
	private int purchase_seq;
	private String purchase_title;
	private String purchase_content;
	private String purchase_date;
	private int purchase_cnt;
	private String user_id;
	private String user_name;

}
