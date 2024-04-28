package com.example.demo;

import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Util {

	public static Map<String, Object> JsonStringifyToMapConverter(Map<String, String> map) throws JsonMappingException, JsonProcessingException{
		
		ObjectMapper objectMapper = new ObjectMapper();
		
		Map<String, Object> returnMap = objectMapper.readValue(map.get("parameter"), Map.class);

		return returnMap;
	}

}
