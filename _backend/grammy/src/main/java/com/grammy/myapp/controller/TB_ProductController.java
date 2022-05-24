package com.grammy.myapp.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grammy.myapp.domain.TB_ShelfStockVO;
import com.grammy.myapp.domain.TB_ShelfVO;
import com.grammy.myapp.domain.TB_StockDetailVO;
import com.grammy.myapp.domain.TB_StockVO;
import com.grammy.myapp.domain.TB_Stock_WeightVO;
import com.grammy.myapp.service.TB_ProductService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/product")
public class TB_ProductController {
	@Autowired
	TB_ProductService service;
	//초기에 버튼 클릭시 선반과 물품 가져오기 user_id를 매개변수로 받아올때
	@RequestMapping(value="/stocklist",method=RequestMethod.POST)
	public List<TB_ShelfStockVO> stockList(TB_ShelfStockVO vo){
		System.out.println(vo);
		List<TB_ShelfStockVO> list=service.stockList(vo);
		System.out.println(list);
		if(list!=null) {
		return list;
		
		}
		else {
			return null;
		}
	}
	//선반 선택 클릭시 선반과 물품 가져오기 shelf_seq를 매개변수로 받아올때
	@RequestMapping(value="/returnlist",method=RequestMethod.POST)
	public List<TB_ShelfStockVO> returnStockList(TB_ShelfStockVO vo){
		System.out.println(vo);
		System.out.println(service.returnShelfList(vo));
		return service.returnShelfList(vo);
	}

	// 선반 선택란 클릭시 선반 리스트 가져오기
	@RequestMapping(value = "/shelflist", method = RequestMethod.POST)
	public List<TB_ShelfVO> shelfList(TB_ShelfVO vo) {
		return service.shelfList(vo);
	}

	// 선반 추가하기
	@RequestMapping(value = "/insertshelf", method = RequestMethod.POST)
	public String insertShelf(TB_ShelfVO vo) {
		int result = service.insertShelf(vo);
		if (result > 0) {
			return "success";
		} else {
			return "fail";
		}

	}
	//선반 삭제하기
	@RequestMapping(value="/deleteshelf",method=RequestMethod.POST)
	public String deleteShelf(TB_ShelfVO vo) {
		System.out.println(vo);
		int result=service.deleteShelf(vo);
		if (result > 0) {
			return "success";
		} else {
			return "fail";
		}

	}

	// 제품 초기 이름 무게 설정하기
	@RequestMapping(value = "/insertstock", method = RequestMethod.POST)
	public String insertStock(TB_StockVO vo) {
		System.out.println(vo);
		System.out.println(vo);
		System.out.println(vo);
		int result = service.insertStock(vo);
		if (result > 0) {
			return "success";
			} else {
			return "fail";
		}
	}
	//제품(stock) 업데이트
	@RequestMapping(value="/updatestock",method=RequestMethod.POST)
	public String updateStock(TB_StockVO vo) {
		System.out.println(vo);
		System.out.println(vo);
		System.out.println(vo);
		int result=service.updateStock(vo);
		if(result>0) {
			return "success";
		}else {
			return "fail";
		}
	}
	//물품 상세보기 ( 무게 등록일자 등)
	@RequestMapping(value="/detailItem",method=RequestMethod.POST)
	public TB_StockDetailVO detailItem(TB_StockDetailVO vo) {
		System.out.println(vo);
		System.out.println(service.detailItem(vo));
		return service.detailItem(vo);
	}

	//무게테이블에 무게 추가하기
	@RequestMapping(value = "/insertweight", method = RequestMethod.POST)
	public String insertWeight(TB_Stock_WeightVO vo) {
		System.out.println(vo);
		System.out.println(vo);
		System.out.println(vo);
		System.out.println(vo);
		int result = service.insertWeight(vo);
		if (result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}

}
