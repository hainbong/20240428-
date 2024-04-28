import axios from 'axios';
import React, { useState } from 'react';
import Editcom from './Editcom.jsx';
import './App.css';
import ComponentEdit from './comp/Component.jsx';
import * as HttpAxios from './comp/Http.js';

function Test2() {

  function onclickHandler(user){ 

    var param = {};
    param.id = "hainbong";
    param.text = document.getElementById("detalID").value;
    const hasNameValid = HttpAxios.GetAxios('http://localhost:7979/userSearch' , param , function(response){
      var txt = document.getElementById("detalID");
      txt.value = response[0].NAME;
    });

  

    // axios.get('http://localhost:7979/userSearch').then((Response)=>{
    //   obj.ID = "asdsad";
    //   arraObj.push(obj);

    //   console.log("어레ㅣ"+arraObj);
    // }).catch((Error)=>{
    //   console.log(Error);
    // })
   }

  const [txtVal, setValue] = useState("ddd");

  const [txtTable, setTable] = useState("dd");

  const [list, setList] = useState({});

  function fn_onClick(e){
    var table =document.getElementById("testTable");
    var rowList = table.rows; // *1)rows collection
    
    
    for (var i=1; i<rowList.length; i++) {
      var row = rowList[i];
      var tdsNum = row.childElementCount;// 자식요소 갯수 구하기.

      row.onclick = function(){ 
        return function(){ 
      
        var str = "";  
        for (var j = 0; j < tdsNum; j++){//row안에 있는 값 순차대로 가져오기.
        
          var row_value = this.cells[j].innerHTML; //*2)cells collection
          str += row_value+' ';//값을 하나의 text값으로 만듦
          
       };//td for
          
      console.log(str);
       
     };//return
  }(row);//onclick
    }  
    
    
  }

  const User = ({userData}) =>{
      return(
        <tr>
          <td id="id" className='border2'>{userData.id}</td>
          <td id="name" className='border2'>{userData.name}</td>
          <td id="age"className='border2'>{userData.age}</td>
          <td id="age"className='border2'>{userData.addr}</td>
          <td id="mobilePhon"className='border2'>{userData.mobilePhon}</td>
        </tr>
      )
  }
  const array = [{id:"A1000" , name:"하인봉" , age:"38"   ,addr:"서울" ,mobilePhon:"010-1234-1111"}
                ,{id:"A1001" , name:"이현민" , age : "33" ,addr:"서울" ,mobilePhon:"010-1234-1112"}
                ,{id:"A1002" , name:"이유주" , age : "33" ,addr:"서울" ,mobilePhon:"010-1234-1113"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                ,{id:"A1003" , name:"하인대" , age : "42" ,addr:"서울" ,mobilePhon:"010-1234-1114"}
                


              ];

  // name3.name = name1.name;
  // name3.age = name2.age;
  // console.log(name1);
  // console.log(name2);
  // console.log(`네임03 : ${name3.name} , ${name3.age} , ${"12323"}` );
  // console.log("네임13 : "+ name3.name + "," + name3.age );


  const onValue = (e) => {
    let na = document.getElementById(e.target.id);
    na.value = "";
  }
  
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  }

   
   const columns = ["Name", "Email", "Phone"];


    return (
      <div> 
        <div className="top-title">※ 사용자관리 ※
      </div>
      <div>▶ 직원리스트
      <img src=""></img>
       <button class="custom-btn btn-delete"  >삭제</button>
        <button class="custom-btn btn-search"  >저장</button>
        <button class="custom-btn btn-new"  >신규</button>
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
        <table className='table-fill' onClick={fn_onClick} id="testTable">
        <thead>
          <tr>
            <th id="ID" className=''>직원ID</th>
            <th id="name" className=''>이름</th>
            <th id="age" className=''>나이</th>
            <th id="addr" className=''>주소</th>
            <th id="" className=''>전화번호</th>
          </tr>
        </thead>
        <tbody className='table-hover'>
        { 
          array.map(item => <User userData={item}/>)  
          // array.map(item =>  //2방법2
          //   <tr>
          //     <td>{item.name}</td>
          //     <td>{item.age}</td>
          //   </tr>
          // ) 
        } 
        </tbody>
      </table>
    </div>
      
      <div className='detailLine'>
      ♣ 직원상세내역
        <img src={process.env.PUBLIC_URL + '/comp/image/clear.png'} />
        <tr className='tr-detail'>
          <td className='td-detail'>
            <ComponentEdit  id="detalID" label="ID"  margin="61px" value="asd12323" val={txtVal}></ComponentEdit>
          </td>
          <td className='td-detail'>
            <ComponentEdit label="이름"  margin="62px"> </ComponentEdit>
          </td>
          <td className='td-detail'>
            <ComponentEdit label="나이" className='' margin="50px"></ComponentEdit>
          </td>
          <td className='td-detail'>
            <ComponentEdit label="주소" className='' width="220px"></ComponentEdit>
          </td>
        </tr>
      </div>
    </div>
    )
}

export default Test2;