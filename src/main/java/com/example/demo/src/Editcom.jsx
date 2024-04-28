
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';


function Editcom(props) {

    const [txtVal, setValue] = useState("");
    const onChangeHandler = (e) => {
      setValue(e.target.value);
    }

    return (
        <div>
          <tr>
            <td>
            <label style={{ marginLeft: props.margin}}>{props.label} :<input style={{ width: "100px", marginLeft: "10px"}} value={txtVal} id={props.id} onChange={onChangeHandler}></input></label>          
              <button style={{ marginLeft: "1px", marginRight:"30px"}}>x</button>
            </td>  
          </tr>
        </div>
    )
  }

export default Editcom;