package com.grammy.myapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grammy.myapp.domain.TB_A_ReplyVO;
import com.grammy.myapp.domain.TB_App_BoardVO;
import com.grammy.myapp.mapper.TB_AppBoardMapper;

@Service
public class TB_AppBoardServiceImpl implements TB_AppBoardService{

	@Autowired
	TB_AppBoardMapper mapper;
	
	@Override
	public List<TB_App_BoardVO> boardList() {
		
		return mapper.boardList();
	}

	@Override
	public int insertBoard(TB_App_BoardVO vo) {
		
		return mapper.insertBoard(vo);
	}

	@Override
	public int deleteBoard(TB_App_BoardVO vo) {
		
		return mapper.deleteBoard(vo);
	}

	@Override
	public int updateBoard(TB_App_BoardVO vo) {
		
		return mapper.updateBoard(vo);
	}

	@Override
	public TB_App_BoardVO detailBoard(TB_App_BoardVO vo) {
		
		return mapper.detailBoard(vo);
	}

	@Override
	public List<TB_A_ReplyVO> replyList(TB_A_ReplyVO vo) {
		
		return mapper.replyList(vo);
	}

	@Override
	public int replyInsert(TB_A_ReplyVO vo) {
		
		return mapper.replyInsert(vo);
	}

	@Override
	public int replyDelete(TB_A_ReplyVO vo) {
		
		return mapper.replyDelete(vo);
	}

	@Override
	public int replyUpdate(TB_A_ReplyVO vo) {
		
		return mapper.replyUpdate(vo);
	}

}
