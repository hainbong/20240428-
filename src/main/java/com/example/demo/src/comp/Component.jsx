import React, { useState , useRef, useEffect,useImperativeHandle} from 'react';
import './Comp.css';


function ComponentEdit(props) {
  
  const onChangeHandler = (e) => {
    //props[`set${e.target.id}`](e.target.value);
    props[props.setName](e.target.value);
  }


const onChangeHandlerBtn = (e) => {
  //props[`set${e.target.id}`]("");
  props[props.setName]("");
  }

  return (
      <div>
        <tr className='tr-detail'>
          <td className='td-detail'>
          <label style={{ marginLeft: props.margin}}>{props.label} : <input onChange={onChangeHandler} value={props.value} id={props.id}  className='CompEdit' style={{ width: props.width}}></input></label>          
            <button onClick={onChangeHandlerBtn} className='btnClearImage'></button>          
          </td>  
        </tr>
      </div>
  )
}

  
  export default ComponentEdit;
