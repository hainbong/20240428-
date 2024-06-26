import React, { useState} from 'react';
import ComponentEdit from './comp/Component.jsx';

const Test = () =>{

    const [inputs, setInputs] = useState({
      txtId: "",
      txtName: "",
      txtPwd : ""
    });

    const { txtId, txtName ,txtPwd} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
      };
    
    return(
        <div>
            <input name="txtId"  onChange={onChange} fn={setInputs}></input>
            <input name="txtName" onChange={onChange}></input>
            <input ame="txtPwd" onChange={onChange}></input>
            <ComponentEdit label="주소" className='' width="220px" setName="setTxtId" ></ComponentEdit>
        </div>   
    );
}

export default Test;