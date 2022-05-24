package com.grammy.myapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grammy.myapp.domain.TB_ShelfStockVO;
import com.grammy.myapp.domain.TB_ShelfVO;
import com.grammy.myapp.domain.TB_StockDetailVO;
import com.grammy.myapp.domain.TB_StockVO;
import com.grammy.myapp.domain.TB_Stock_WeightVO;
import com.grammy.myapp.mapper.TB_ProductMapper;

@Service
public class TB_ProductServiceImpl implements TB_ProductService{

	@Autowired
	TB_ProductMapper mapper;
	

	@Override
	public List<TB_ShelfVO> shelfList(TB_ShelfVO vo) {
		return mapper.shelfList(vo);

	}
	@Override
	public List<TB_ShelfStockVO> stockList(TB_ShelfStockVO vo) {
		
		return mapper.stockList(vo);
	}
	
	@Override
	public List<TB_ShelfStockVO> returnShelfList(TB_ShelfStockVO vo) {
		
		return mapper.returnStockList(vo);
	}


	@Override
	public int insertShelf(TB_ShelfVO vo) {
		return mapper.insertShelf(vo);
		
	}

	@Override
	public int insertStock(TB_StockVO vo) {
		
		return mapper.insertStock(vo);
	}

	@Override
	public int insertWeight(TB_Stock_WeightVO vo) {
		
		return mapper.insertWeight(vo);
	}
	@Override
	public TB_StockDetailVO detailItem(TB_StockDetailVO vo) {
		
		return mapper.detailItem(vo);
	}
	@Override
	public int updateStock(TB_StockVO vo) {
		
		return mapper.updateStock(vo);
	}
	@Override
	public int deleteShelf(TB_ShelfVO vo) {
		
		return mapper.deleteShelf(vo);
	}



}
