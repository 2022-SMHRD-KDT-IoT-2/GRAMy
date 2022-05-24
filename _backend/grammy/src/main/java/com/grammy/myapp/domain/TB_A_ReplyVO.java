package com.grammy.myapp.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TB_A_ReplyVO {
	private int ar_seq;
	private int tb_a_seq;
	private String ar_content;
	private String user_id;
	private String user_name;
	private String ar_date;

}
