package com.grammy.myapp.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TB_Stock_WeightVO {

	private int weight_seq;
	private int stock_seq;
	private int weight_value;
	private String weight_date;
	private String weight_memo;
}
