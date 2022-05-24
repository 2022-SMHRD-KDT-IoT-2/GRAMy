package com.grammy.myapp.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TB_ReportVO {
	private int report_seq;
	private String report_title;
	private String report_content;
	private String report_date;
	private char report_status;
	private String user_id;
	private String user_name;
	private int report_cnt;
	

}
