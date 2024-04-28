import React  from 'react';
import { BrowserRouter as Router,  Redirect, Switch ,Routes,Route,Link} from 'react-router-dom';
import Test2 from '../Test2';
import Test from '../Test';
import Noti from '../program/Noti';


const Main = () =>{
    return(
     <div>
        <nav>
            <Link to="/test2">사용자관리</Link> 
            <Link to="/noti">공지사항</Link> 
            <Link to="/test">태스트용</Link>        
        </nav>
        <Routes> 
            <Route path='/test2' element={<Test2/>}></Route>
            <Route path='/noti' element={<Noti/>}></Route>
            <Route path='/test' element={<Test/>}></Route>
        </Routes>  
    </div>  
    );
}

export default Main;