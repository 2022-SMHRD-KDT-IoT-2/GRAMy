package com.grammy.myapp.domain;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TB_P_ReplyVO {
	private int pr_seq;
	private int purchase_seq;
	private String pr_content;
	private String pr_date;
	private String user_id;
	private String user_name;

}
