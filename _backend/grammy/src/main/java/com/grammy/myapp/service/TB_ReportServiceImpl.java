package com.grammy.myapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grammy.myapp.domain.TB_ReplyVO;
import com.grammy.myapp.domain.TB_ReportVO;
import com.grammy.myapp.mapper.TB_ReportMapper;

@Service
public class TB_ReportServiceImpl implements TB_ReportService{

	@Autowired
	TB_ReportMapper mapper;
	
	@Override
	public List<TB_ReportVO> AllList() throws Exception {
		
		return mapper.AllList();
	}

	@Override
	public TB_ReportVO DetaliContent(int report_seq) throws Exception {
		
		return mapper.DetailContent(report_seq);
	}

	@Override
	public int DeleteReport(int report_seq) throws Exception {
		
		return mapper.DeleteReport(report_seq);
	}

	@Override
	public int UpdateReport(TB_ReportVO vo) throws Exception {
		
		return mapper.UpdateReport(vo);
	}

	@Override
	public void InsertReport(TB_ReportVO vo) throws Exception {
		mapper.InsertReport(vo);
		
	}

	@Override
	public void viewCount(int report_seq) throws Exception {
		mapper.viewCount(report_seq);
		
	}

	@Override
	public List<TB_ReplyVO> ReplyList(int report_seq) throws Exception {
		
		return mapper.ReplyList(report_seq);
	}

	@Override
	public int UpdateReply(TB_ReplyVO vo) throws Exception {
		
		return mapper.UpdateReply(vo);
	}

	@Override
	public int DeleteRelpy(int reply_seq) throws Exception {
		
		return mapper.DeleteRelpy(reply_seq);
	}

	@Override
	public void InsertReply(TB_ReplyVO vo) throws Exception {
		mapper.InsertReply(vo);
		
		
	}

}
