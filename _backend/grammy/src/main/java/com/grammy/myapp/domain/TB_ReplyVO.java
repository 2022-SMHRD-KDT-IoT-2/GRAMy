package com.grammy.myapp.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TB_ReplyVO {
	private int reply_seq;
	private int report_seq;
	private String reply_content;
	private String  reply_date;
	private String user_id;
	private String user_name;

}
