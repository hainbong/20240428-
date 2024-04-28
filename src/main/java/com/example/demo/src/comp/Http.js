import axios from 'axios';
import React from 'react';

export  function GetAxios(url , param, func){
    
    let parameter = JSON.stringify(param);
    axios.get(url ,{ params: {
        parameter
      }}).then((Response)=>{
        //func(Response.data);  
        func(Response);  
        let errorCode = Response.data.errorCode;
        if(errorCode != null && errorCode < 0){
            alert(Response.data.errorMsg);
        }
    }).catch((Error)=>{
        alert("에러");
    })
}

export  function PostAxios(url , param, func){
    
    let parameter = JSON.stringify(param);
    axios.post(url ,"",{ params: {
        parameter
      }}).then((Response)=>{
      //  func(Response.data);        
      func(Response); 
    }).catch((Error)=>{
        alert("에러");
    })
}


