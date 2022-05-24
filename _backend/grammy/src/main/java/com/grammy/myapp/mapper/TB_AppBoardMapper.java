package com.grammy.myapp.mapper;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;

import com.grammy.myapp.domain.TB_A_ReplyVO;
import com.grammy.myapp.domain.TB_App_BoardVO;
import com.grammy.myapp.domain.TB_ShelfVO;

@MapperScan
public interface TB_AppBoardMapper {
	
	// 게시판 리스트 가져오기
	public List<TB_App_BoardVO> boardList();
	//게시작 작성하기
	public int insertBoard(TB_App_BoardVO vo);
	//게시판 수정하기
	public int updateBoard(TB_App_BoardVO vo);
	//게시판 삭제하기
	public int deleteBoard(TB_App_BoardVO vo);
	//게시판 상세보기
	public TB_App_BoardVO detailBoard(TB_App_BoardVO vo);
	//댓글 리스트 가져오기
	public List<TB_A_ReplyVO> replyList(TB_A_ReplyVO vo);
	//댓글 작성하기
	public int replyInsert(TB_A_ReplyVO vo);
	//댓글 삭제하기
	public int replyDelete(TB_A_ReplyVO vo);
	//댓글 수정하기
	public int replyUpdate(TB_A_ReplyVO vo);
}
