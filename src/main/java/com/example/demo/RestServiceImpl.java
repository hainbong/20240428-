package com.example.demo;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RestServiceImpl implements RestService{
	
	@Autowired
	private  CommonDao commonDao;

	@Override
	public List<Map<String, Object>> getYeboList(Map<String, Object> map) throws Exception {
		// TODO Auto-generated method stub
		List<Map<String,Object>> yeboList = commonDao.getYeboList(map);
        return yeboList;
	}


	@Override
	public Map<String, Object> chkLoginUser(Map<String, Object> map) throws Exception {
		// TODO Auto-generated method stub
		Map<String,Object> reslutFail = new HashMap<String,Object>();
		Map<String,Object>chkUserResult = commonDao.chkLoginUser(map);
		
		
		
		if(chkUserResult == null || chkUserResult.isEmpty()) {
			reslutFail.put("erorrCode" ,"-1");
			reslutFail.put("erorrName" ,"존1재하지않은 메일주소입니다.");
		}else if(chkUserResult.get("PWD") != map.get("pwd")) {
			reslutFail.put("erorrCode" ,"-2");
			reslutFail.put("erorrName" ,"비밀번호가 맞지 않습니다.");
		}
		
		reslutFail.put("erorrCode" ,"1");
		reslutFail.put("erorrName" ,"로그인 완료");
		
        return reslutFail;
	}


	@Override
	@Transactional
	public void updateUser(Map<String, Object> map) throws Exception {
		// TODO Auto-generated method stub
		Map<String,Object> result = new HashMap<String,Object>();
		commonDao.updateUser(map);
		result.put("E","goof");
	}


	@Override
	public List<Map<String, Object>> getTime(Map<String, Object> map) throws Exception {
		// TODO Auto-generated method stub
		List<Map<String,Object>> currentTime = commonDao.getTime(map);
        return currentTime;
	}
	
	

}
