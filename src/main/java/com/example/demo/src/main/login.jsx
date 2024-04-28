import './Login.css';
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePassword } from "react-icons/md";
import { RiKakaoTalkLine } from "react-icons/ri";
import React, { useState ,useEffect} from 'react';
import * as HttpAxios from '../comp/Http.js';
import * as Gfn from '../comp/Lib.js';
import App from "../App.js";

const Login = (props) =>{
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [inputs, setInputs] = useState({
    	email : "gkdlsqhd1@naver.com"
      , pwd : "1" 
    });

    const {email, pwd} = inputs;

    const onChangeHandler = (e) => {
    	const {value, name} = e.target;
        setInputs({
        	...inputs,
            [name] : value
        });
    };
    
    const fn_setFocus = (el) => {
        if(!Gfn.isEmpty(el)){
            document.getElementById(el).focus();
        }

    }

    const onKeyDownHandler = (e) => {
        if(e.key === "Enter") {
            fn_login();
         }
    }

    const onKeyDownMailHandler = (e) => {
        if(e.key === "Enter") {
            fn_setFocus("pwd");
         }
    }

    //로그인버튼
    const onClickHandler = (e) => {
        fn_login();
    }

    const fn_login = () => {

        if(Gfn.isEmpty(inputs.email) && Gfn.isEmpty(inputs.pwd)){
            fn_setFocus("email");
            return alert("이메일과 비민번호를 입력해주세요.");
        }
        if(Gfn.isEmpty(inputs.pwd)){
            fn_setFocus("pwd");
            return alert("비밀번호를 입력해 주세요.");
        }
        
        if(!Gfn.isEmail(inputs.email)){
            fn_setFocus("email");
            return alert("잘못된 이메일 주소입니다."); 
        }

        var param = {};
        param = inputs;
        const hasNameValid = HttpAxios.GetAxios('http://localhost:7979/login' , inputs , function(response){
            response = response.data;
            if(response.errorCode == "-1"){
                fn_setFocus("email");
            }else if(response.errorCode == "-2"){
                fn_setFocus("pwd");
            }else if(response.errorCode == "1"){
                props.onClick();
            }
          });
    }

    return(
        
            <div className="login-block"> 
                
                <h1>로그인 정보</h1>
                                        
                <div className="form-group">
                    <div className="input-group">
                    <TfiEmail />
                    <input value = {inputs.email} type="text" className="form-control" placeholder="Your email address" id="email" name="email" onChange={onChangeHandler} onKeyDown={(e) => onKeyDownMailHandler(e)}/>
                    </div>
                </div>
            
                <div className="form-group">
                    <div className="input-group">
                    <MdOutlinePassword />
                    <input value = {inputs.pwd} type="password" className="form-control" placeholder="Choose a password" id="pwd" name="pwd" onChange={onChangeHandler} onKeyDown={(e) => onKeyDownHandler(e)}/>
                    </div>
                </div>        

                <button className="btn btn-primary btn-block" onClick={onClickHandler} >Login</button>

                <div className="login-footer">
                    <h6>카카오인증</h6>
                    <RiKakaoTalkLine/>
                </div>
          
        
                <div className="login-links">
                    <p className="text-center"><a className="txt-brand" href="user-login.html">회원가입 바로가기</a></p>
                </div> 
       
             </div> 
    );
}

export default Login;