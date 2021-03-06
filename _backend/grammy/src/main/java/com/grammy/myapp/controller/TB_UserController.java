package com.grammy.myapp.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.grammy.myapp.config.auth.Auth;
import com.grammy.myapp.config.auth.CustomUserDetailService;
import com.grammy.myapp.config.jwt.JwtTokenProvider;
import com.grammy.myapp.domain.TB_UserVO;
import com.grammy.myapp.domain.User;
import com.grammy.myapp.repository.UserRepository;
import com.grammy.myapp.service.TB_UserService;

import ch.qos.logback.core.recovery.ResilientSyslogOutputStream;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins="*")
public class TB_UserController {
	

    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;
    

	Gson gson=new Gson();

	@Autowired
	CustomUserDetailService customuser;

	@Autowired
	TB_UserService service;
	


	//????????????
	@RequestMapping(value="/join.do",method = RequestMethod.POST)
	public String joinPOST(@RequestBody TB_UserVO user){
		System.out.println(user);
		try {		
			
			String rawPassword=user.getUser_pw();
			String encPassword=passwordEncoder.encode(rawPassword);
			user.setUser_pw(encPassword);
			System.out.println(user); 
			service.userJoin(user);
			return "success";		
			}
		catch(Exception e) {
			e.printStackTrace();
			return "fail";
			
		}

	}

	//????????? ????????????
	@RequestMapping(value="/userIdCk.do", method=RequestMethod.POST)
	public String userIdCk(String userId) throws Exception{
		System.out.println(userId);
		
		int result = service.idCheck(userId);

		if (result != 0) {
			return "fail";
		} else {
			return "success";
		}
	}
    // ?????????
    @PostMapping("/login.do")
    public String login(@RequestBody Map<String, String> param) throws Exception{
    	System.out.println(param);
    	String jsonStr=gson.toJson(param);
    	System.out.println(jsonStr);
    	User user=gson.fromJson(jsonStr,User.class);
    	System.out.println(user);
        User member = userRepository.findByUserId(user.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("???????????? ?????? E-MAIL ?????????."));
        if (!passwordEncoder.matches(user.getPassword(), member.getPassword())) {
            throw new IllegalArgumentException("????????? ?????????????????????.");
        }
        
        String token=jwtTokenProvider.createToken(member.getUsername(), member.getUserRoleList());
        String user_name=member.getUser_Name();
        String user_id=member.getUserId();
        Auth auth=new Auth(token,user_id,user_name);
        String result = gson.toJson(auth);
        System.out.println(result);
        return result;
    }
    
    //???????????? ????????????????????????
    @RequestMapping(value="/selectOne.do",method = RequestMethod.POST)
    public TB_UserVO selectOnelist(@RequestBody TB_UserVO vo) throws Exception{
    	System.out.println(vo);
    	TB_UserVO vo1=service.selectOneList(vo);
    	System.out.println(vo1);
    	if(vo!=null) {
    	return vo1;
    	}else {
    		return null;
    	}	
    }
    // ???????????? ????????????
    @RequestMapping(value="/updateUser.do",method=RequestMethod.POST)
    public String updateUser(@RequestBody TB_UserVO vo) throws Exception{
    	System.out.println(vo);
    	String rawPassword=vo.getUser_pw();
		String encPassword=passwordEncoder.encode(rawPassword);
		vo.setUser_pw(encPassword);
    	int vo1=service.updateUser(vo);
    	
    	System.out.println(vo1);
    	if(vo1 >= 1) {
    		return "success";
    	}
    else {
    	return "fail";
    	}
    }

    
    // ????????????????????????
    @PostMapping("/androidlogin.do")
    public TB_UserVO androidlogin(TB_UserVO user) throws Exception{
    	System.out.println(user);
    	TB_UserVO member=service.selectOneList(user);
    	System.out.println(member);
        if (!passwordEncoder.matches(user.getUser_pw(), member.getUser_pw())) {
            throw new IllegalArgumentException("????????? ?????????????????????.");
        }
        return member;
    }
    //??????????????? ????????????
    @PostMapping("/androidjoin.do")
    public String androidjoin(TB_UserVO user) throws Exception{
    	
    	
		String rawPassword=user.getUser_pw();
		String encPassword=passwordEncoder.encode(rawPassword);
		user.setUser_pw(encPassword);
		System.out.println(user); 
    	service.userJoin(user);
    	
    	return "success";
    }
    //??????????????? ????????????
    @PostMapping("/androidupdate.do")
    public String androidupdate(TB_UserVO vo) throws Exception{
    	
    	// ???????????? ????????? ??????
    	String rawPassword=vo.getUser_pw();
		String encPassword=passwordEncoder.encode(rawPassword);
		vo.setUser_pw(encPassword);
    	int vo1=service.updateUser(vo);
    	
    	System.out.println(vo1);
    	if(vo1 >= 1) {
    		return "success";
    	}
    else {
    	return "fail";
    	}
    	
    }
    
    //????????? ??????
    @PostMapping("/findid.do")
    public TB_UserVO findId(TB_UserVO vo) throws Exception{
    	TB_UserVO vo1=service.findId(vo);
    	if(vo1!=null) {
    		return vo1;
    	}else {
    		return null;
    	}
    }
    //???????????? ??????
    @PostMapping("/findpw.do")
    public TB_UserVO findPw(TB_UserVO vo) throws Exception{
    	TB_UserVO vo1=service.findPw(vo);
    	if(vo1!=null) {
    		return vo1;
    	}else {
    		return null;
    	}
    }
    //??????????????? ??????
    @PostMapping("/modifypw.do")
    public String modifyPw(TB_UserVO vo) throws Exception{
    	
    	String rawPassword=vo.getUser_pw();
		String encPassword=passwordEncoder.encode(rawPassword);
		vo.setUser_pw(encPassword);
		
    	int result=service.modifyPw(vo);
    	if(result>0) {
    		return "success";
    	}else {
    		return "fail";
    	}
    }


    
    

}
