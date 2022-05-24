package com.grammy.myapp.service;

import java.util.List;

import com.grammy.myapp.domain.TB_ShelfStockVO;
import com.grammy.myapp.domain.TB_ShelfVO;
import com.grammy.myapp.domain.TB_StockDetailVO;
import com.grammy.myapp.domain.TB_StockVO;
import com.grammy.myapp.domain.TB_Stock_WeightVO;

public interface TB_ProductService {
	
	public List<TB_ShelfVO> shelfList(TB_ShelfVO vo);
	
	public List<TB_ShelfStockVO> returnShelfList(TB_ShelfStockVO vo);
	
	public int insertShelf(TB_ShelfVO vo);
	
	public int deleteShelf(TB_ShelfVO vo);
	
	public List<TB_ShelfStockVO> stockList(TB_ShelfStockVO vo);
	
	public TB_StockDetailVO detailItem(TB_StockDetailVO vo);
	
	public int insertStock(TB_StockVO vo);
	
	public int insertWeight(TB_Stock_WeightVO vo);
	
	public int updateStock(TB_StockVO vo);

}
