package com.grammy.myapp.mapper;


import java.util.List;

import org.mybatis.spring.annotation.MapperScan;

import com.grammy.myapp.domain.TB_UserVO;




@MapperScan
public interface TB_UserMapper {
	//회원가입
	public void userJoin(TB_UserVO user);

	// 회원리스트 불러오기
	public List<TB_UserVO> selectAllList();

	//아이디 중복검사
	public int idCheck(String userId);
	
	//아이디로 유저 정보가져오기
	public TB_UserVO selectOneList(TB_UserVO vo);
	
	//회원 정보 수정하기
	public int updateUser(TB_UserVO vo);
	//아이디 찾기
	public TB_UserVO findId(TB_UserVO vo);
	//비밀번호 찾기
	public TB_UserVO findPw(TB_UserVO vo);
	//비밀번호 수정
	public int modifyPw(TB_UserVO vo);
	
}
