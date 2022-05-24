package com.grammy.myapp.service;

import java.util.List;

import com.grammy.myapp.domain.TB_P_ReplyVO;
import com.grammy.myapp.domain.TB_PurchaseVO;



public interface TB_PurchaseService {
	
	public List<TB_PurchaseVO> AllList() throws Exception;
	
	public TB_PurchaseVO DetaliContent(int purchase_seq) throws Exception;
	
	public int DeletePurchase(int purchase_seq) throws Exception;
	
	public int UpdatePurchase(TB_PurchaseVO vo) throws Exception;
	
	public void InsertPurchase(TB_PurchaseVO vo) throws Exception;

	public void viewCount(int purchase_seq) throws Exception;
	
	public List<TB_P_ReplyVO> ReplyList(int purchase_seq) throws Exception;
	
	public int UpdateReply(TB_P_ReplyVO vo) throws Exception;

	public int DeleteReply(int pr_seq) throws Exception;

	public void InsertReply(TB_P_ReplyVO vo) throws Exception;
}
