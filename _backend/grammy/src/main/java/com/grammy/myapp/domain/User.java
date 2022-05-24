package com.grammy.myapp.domain;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;

@Data
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="tb_user")
public class User implements UserDetails{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "user_seq")
    private Long userSeq;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "user_pw")
    private String userPw;

    @Column(name = "user_phone")
    private String userPhone;

    @Column(name = "user_addr")
    private String userAddr;
    
    @Column(name = "user_role")
    private String userRole;
    
    @Column(name = "user_joindate")
    private String userJoindate;
    
    @Column(name = "user_name")
    private String user_Name;
    
    @Column(name = "user_gender")
    private String userGender;
    
    public List<String> getUserRoleList(){
    	if(this.userRole.length()>0) {
    		return Arrays.asList(this.userRole.split(","));
    	}
    	return new ArrayList<>();	
    }

    @Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<GrantedAuthority> authorities=new ArrayList<>();
		getUserRoleList().forEach(r->{
			authorities.add(()->r);
		});
		return authorities;
	}

	@Override
	public String getPassword() {
		
		return getUserPw();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return getUserId();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
    

    }
    
