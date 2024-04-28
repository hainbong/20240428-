package com.example.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
public class RestApiController {
	
	@Autowired
    private RestService restService;

	@GetMapping("/userSearch")
	public List<Map<String, Object>> searhUser(@RequestParam Map<String, String> paramMap) throws Exception {
		List<Map<String, Object>> list2 = restService.getYeboList(Util.JsonStringifyToMapConverter(paramMap));
		return list2;
	}
	
	@GetMapping("/login")
	public Map<String, Object> login(@RequestParam Map<String, String> paramMap , HttpSession session)  throws Exception {
		
		Map<String,Object> reslutFail = new HashMap<String,Object>();
		Map<String,Object> jsonMap = Util.JsonStringifyToMapConverter(paramMap);
		
		Map<String, Object> chkUserResult = restService.chkLoginUser(jsonMap);

		if(chkUserResult == null || chkUserResult.isEmpty()) {
			reslutFail.put("errorCode" ,"-1");
			reslutFail.put("errorMsg" ,"존재하22지않는 메일주소입니다.");
		}else if(!chkUserResult.get("PWD").equals(jsonMap.get("pwd"))) {
			reslutFail.put("errorCode" ,"-2");
			reslutFail.put("errorMsg" ,"비밀번호가 맞지 않습니다.");
		}else if(chkUserResult != null && !chkUserResult.isEmpty()){
			if(chkUserResult.get("PWD").equals(jsonMap.get("pwd"))){
				reslutFail.put("errorCode" ,"1");
				reslutFail.put("errorMsg" ,"로그인 완료");
				setSesion(jsonMap , session);
			}else {
				reslutFail.put("errorCode" ,"-3");
				reslutFail.put("errorMsg" ,"로그인 실패");
			}
			
		}
		
        return reslutFail;
	}
	
	@PostMapping("/updateUser")
	public void userUpdate(@RequestParam Map<String, String> paramMap) throws Exception {
	 	restService.updateUser(Util.JsonStringifyToMapConverter(paramMap));
	}
	
	private void setSesion(Map<String, Object> jsonMap , HttpSession session) {
		session.setAttribute("USER_ID", jsonMap.get("email"));
		session.setAttribute("PWD", jsonMap.get("pwd"));
	
		
	}
	
	@GetMapping("/getTime")
	public List<Map<String, Object>> getTime(@RequestParam Map<String, String> paramMap) throws Exception {
		List<Map<String, Object>> list2 = restService.getTime(Util.JsonStringifyToMapConverter(paramMap));
		return list2;
	}

} 
 