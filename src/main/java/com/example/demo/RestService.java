package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public interface RestService {

    public List<Map<String,Object>> getYeboList(Map<String, Object> map) throws Exception;

    public Map<String, Object> chkLoginUser(Map<String, Object> map) throws Exception;
	
	public void updateUser(Map<String, Object> map) throws Exception;

	public List<Map<String,Object>> getTime(Map<String, Object> map) throws Exception;
    
}