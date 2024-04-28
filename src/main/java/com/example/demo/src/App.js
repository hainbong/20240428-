import logo from './logo.svg';
import './App.css';
import Test2 from './Test2';
import Main from "./main/Main.jsx";
import React, {useState} from 'react';
import Login from './main/login.jsx';
import { BrowserRouter as Router,  Redirect, Switch ,Routes,Route,Link} from 'react-router-dom';

{/* <div>
<nav>
<Link to="/test2">사용자관리</Link> 
<Link to="/main/login">로그인</Link>        
</nav>
<Routes>
<Route path='/test2' element={<Test2/>}></Route>
<Route path='/main/login' element={<Login/>}></Route>
</Routes>  
</div>  */}

function App(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn(true)
  };

  return (
  <div>
      {isLoggedIn ? (
        <Main />
      ) : (
        <Login onClick={handleButtonClick}/>
      )}
    </div>
  )
}



export default App;
