package com.grammy.myapp.domain;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TB_ShelfVO {
	private int shelf_seq;
	private String shelf_name;
	private String user_id; 

}
