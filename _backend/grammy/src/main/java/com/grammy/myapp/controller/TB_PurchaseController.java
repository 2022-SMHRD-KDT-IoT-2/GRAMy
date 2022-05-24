package com.grammy.myapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grammy.myapp.domain.TB_P_ReplyVO;
import com.grammy.myapp.domain.TB_PurchaseVO;
import com.grammy.myapp.service.TB_PurchaseService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/purchase")
public class TB_PurchaseController {
	
	@Autowired
	TB_PurchaseService service;
	// 게시판리스트
	@RequestMapping("/list.do")
	public List<TB_PurchaseVO> AllList() throws Exception{
		
		List<TB_PurchaseVO> list=service.AllList();
		if(list!=null) {
			return list;
		}else {
			return null;
			//
		}
		
	}
	
	//게시판 상세내용
	@RequestMapping(value="/content.do", method = RequestMethod.POST)
	public TB_PurchaseVO DetailContent(@RequestBody int purchase_seq) throws Exception{
		System.out.println(purchase_seq);
		service.viewCount(purchase_seq);
		
		return service.DetaliContent(purchase_seq);
	}
	//게시판 삭제
	@RequestMapping(value="/delete.do",method = RequestMethod.GET)
	public String Delete(@RequestParam int purchase_seq) throws Exception{
		int result=service.DeletePurchase(purchase_seq);
		if(result>0) {
		return "Success";
		}
		else {
			return "fail";
		}
	}
	//게시판 업데이트
	@RequestMapping(value="/update.do",method = RequestMethod.POST)
	public String Update(@RequestBody TB_PurchaseVO vo) throws Exception{
		int result=service.UpdatePurchase(vo);
		if(result>0) {
		return "Success";
		}else {
		return "fail";
		}
	}
	//게시판 작성
	@RequestMapping(value="/insert.do",method=RequestMethod.POST)
	public String Insert(@RequestBody TB_PurchaseVO vo) throws Exception{
		System.out.println(vo);
		System.out.println(vo);
		System.out.println(vo);
		
		service.InsertPurchase(vo);
		return "Success";
	}
	// 게시판 댓글 가져오기
	@RequestMapping(value="/replylist.do",method=RequestMethod.POST)
	public List<TB_P_ReplyVO> ReplyList(@RequestBody int purchase_seq)throws Exception{
		List<TB_P_ReplyVO> list=service.ReplyList(purchase_seq);
		if(list!=null) {
		return list;
		}else {
			return null;
		}
	}
	//댓글 작성하기
	@RequestMapping(value="/replyinsert.do",method=RequestMethod.POST)
	public String InsertReply(@RequestBody TB_P_ReplyVO vo) throws Exception{
		service.InsertReply(vo);
		
		return "success";
	}
	
	//댓글 삭제하기
	@RequestMapping(value="/replydelete.do",method=RequestMethod.GET)
	public String DeleteReply(@RequestParam int pr_seq) throws Exception {
		int result=service.DeleteReply(pr_seq);
		if(result>0) {
			return "success";
		}else {
			return "fail";
		}
	}
	//댓글 수정하기
	@RequestMapping(value="/replyupdate.do",method=RequestMethod.POST)
	public String UpdateReply(@RequestBody TB_P_ReplyVO vo) throws Exception{
		int result=service.UpdateReply(vo);
		
		if(result>0) {
			return "success";
		}else {
			return "fail";
		}
	}

}
