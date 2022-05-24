package com.grammy.myapp.service;

import java.util.List;

import com.grammy.myapp.domain.TB_A_ReplyVO;
import com.grammy.myapp.domain.TB_App_BoardVO;

public interface TB_AppBoardService {
	
	public List<TB_App_BoardVO> boardList();
	
	public int insertBoard(TB_App_BoardVO vo);
	
	public int deleteBoard(TB_App_BoardVO vo);
	
	public int updateBoard(TB_App_BoardVO vo);
	
	public TB_App_BoardVO detailBoard(TB_App_BoardVO vo);
	
	public List<TB_A_ReplyVO> replyList(TB_A_ReplyVO vo);

	public int replyInsert(TB_A_ReplyVO vo);

	public int replyDelete(TB_A_ReplyVO vo);

	public int replyUpdate(TB_A_ReplyVO vo);

}
