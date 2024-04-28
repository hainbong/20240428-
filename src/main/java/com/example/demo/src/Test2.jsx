import React, { useState} from 'react';
import Editcom from './Editcom.jsx';
import './App.css';
import ComponentEdit from './comp/Component.jsx';
import * as HttpAxios from './comp/Http.js';
import * as Gfn from './comp/Lib.js';
import baram from './comp/image/바람길.png'; // 이미지 파일의 경로를 import 합니다.
import claer from './comp/image/clear.png'; // 이미지 파일의 경로를 import 합니다.
import Modal from 'react-modal';

function Test2(props) {
   
   const [txtId, setTxtId] = useState("");
   const [txtName, setTxtName] = useState("");
   const [txtPwd, setTxtPwd] = useState("");
   const [modalIsOpen, setModalIsOpen] = useState(false);
    // 하나의 State로 여러개 관리 가능
    // const [userInput, setUserInput] = useState({
    //   txtId: "",
    //   txtName: "",
    //   txtPwd : ""
    // });
    

   
   const [list, setList] = useState([]);


  function onclickHandler(user){ 

      var param = {};
      param.ID = "test@naver.com";
      param.text = document.getElementById("txtId").value;
      param.text = txtId;

      const hasNameValid = HttpAxios.GetAxios('http://localhost:7979/userSearch' , param , function(response){
        setList(response.data);
      });
   }


  function handleRowClick(data){

    
    let rowData = data;
    setTxtId(rowData.ID);
    setTxtName(rowData.NAME);
    setTxtPwd(rowData.PWD);
    //document.getElementById("TxtId").value = rowData.ID;
    
  }

  const newOnClick = () =>{
    
       setTxtId("")
      setTxtName("")
      setTxtPwd("")
   
  }


  const fn_save = () =>{
    let param = {};
    param.USER_ID  = txtId;
    param.PWD  = txtPwd;
    param.NAME = txtName;
    const hasNameValid = HttpAxios.PostAxios('http://localhost:7979/updateUser' , param , function(response){
      onclickHandler();
    });
  }

  const fn_delete = () => {
    alert("assad")
  }

  const User = ({userData}) =>{
    if(Gfn.isEmpty(list)) return;
    return (
      <div>
        {list.map((item, index) => (
          <tr row={index} onClick={() => handleRowClick(item)} >
            <td id="ID" className='border2'>{item.ID}</td>
            <td id="NAME" className='border2'>{item.NAME}</td>
            <td id="PWD"className='border2'>{item.PWD }</td>
          </tr>
        ))}
      </div>
    );
  }

  return (
      <div> 
         <div className="top-title">※ 사용자관리 ※
            </div>
            <div>▶ 직원리스트
            <img src=""></img>
            <button class="custom-btn btn-delete"  onClick={fn_delete}>삭제</button>
              <button onClick={fn_save} class="custom-btn btn-search"  >저장</button>
              <button onClick={newOnClick} class="custom-btn btn-new"  >신규</button>
              <button class="custom-btn btn-search"  onClick={onclickHandler}>조회</button>

              <select name="choice" style={{float: "right"}}> 
              <option value="banana">1시간</option>
              <option value="apple">01</option>
              <option value="orange">02</option>
              <option value="orange">03</option>
              <option value="orange">04</option>
              <option value="orange">05</option>
              <option value="orange">06</option>
        </select>
      </div>
      
      <div className='table-title'>
        <table className='table-fill' id="testTable">
        <thead>
          <tr>
            <th id="ID" className=''>직원ID</th>
            <th id="NAME" className=''>이름</th>
            <th id="AGE" className=''>나이</th>
          </tr>
        </thead>
        <tbody className='table-hover'>
        { 
          <User/>
        } 
        </tbody>
      </table>
    </div>
      
      <div className='detailLine'>
      ♣ 직원상세내역
        <img src={txtId == "1" ? claer : baram} style={{ width: "200px", height:"200px" ,cursor:'pointer'}} onClick={()=> setModalIsOpen(true)}></img>
     
        <Modal className={modalIsOpen ? "openModal modal" : "modal"} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{width: "400px !important",height:"400px !important"}}>
      	This is Modal content
      </Modal>
        <tr className='tr-detail'>
          <td className='td-detail'>
            <ComponentEdit id="txtId" label="ID"  margin="61px" value={txtId} setTxtId={setTxtId} setName="setTxtId"></ComponentEdit>
          </td>
          <td className='td-detail'>
            <ComponentEdit id="txtName" label="이름"   margin="62px" value={txtName} setTxtName={setTxtName} setName="setTxtName"> </ComponentEdit>
          </td>
          <td className='td-detail'>
            <ComponentEdit id="txtPwd" label="비밀번호" className='' margin="50px" value={txtPwd} setTxtPwd={setTxtPwd} setName="setTxtPwd"></ComponentEdit>
          </td>
        </tr>
      </div>
    </div>
    )
}

export default Test2;