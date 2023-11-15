import  { useState } from 'react';
import './Login.css';
//import {Link,useNavigate} from 'react-router-dom';
import logo from './log.png';
import { Link } from 'react-router-dom';
// import welcomeimg from './ayurveda2.avif';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Alert } from 'bootstrap';

function AdminLogin() {
  const [email, setemail] = useState("");
  const [passval, setpassval] = useState("");
  

   //const navigate = useNavigate();
  const [defaultemail, setEmail] = useState("Admin@gmail.com");
  const [defaultpwd, setPwd] = useState("Admin");
  const [auth,setAuth] = useState(false);

  if(auth){
    return <Redirect to ="/medicine"/>
  }

  function login() {
    let isLogged = checkIfUserIsValid();
    if (isLogged) {
      //alert("Login Successful");
       //navigate("/land");
       setAuth(true);
    } else {
      // navigate("/Failure");
      //document.getElementById("name").innerHTML="Something went wrong";
    }
  }
  function checkIfUserIsValid() {
    const requestBody = {
      emailid: email,
      password: passval,
    };

    if (email === defaultemail && passval === defaultpwd) return true;
    else return false;
  }
  return (
    <div  className="main-Login">
      
      <div className="login-contain">
        <div className="left">
          <div className='img'>
            <img src={logo} alt="" style={{height:"100px", width:"100px"}}/>
          </div>
          <form >
            <label for="uname" style={{color:"red",marginLeft:"100px" , marginBottom:"0px"}}><h4>Admin Email Id</h4></label>
            <input placeholder="Enter your email id" type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} id="uname" style={{color:"red",marginLeft:"80px",marginTop:"0px"}} required/>
            <label for="pwd" style={{color:"red",marginLeft:"100px",marginTop:"0px"}}><h4 style={{marginTop:"0px"}}>Admin Password</h4></label>
            <input placeholder="Enter Password" type="password" value={passval} onChange={(e)=>{setpassval(e.target.value)}} id="pwd" style={{color:"red",marginLeft:"80px",marginTop:"0px"}} required/>
            <button onClick={login} type="submit" id="sub_btn" style={{marginLeft:"60px"}}>Login</button><br/>
            {/* <p id="name"> </p> */}
            
          </form>
          {/* <div className='footer1'>
           
          </div>
        </div>
        <div className="right">
          <div className='welcomenote'>
            <h3 >Welcome!</h3>
          </div>
          <div className='welcomeimg'>
            <img src={""} id="wel-img-id"/>
          </div> */}
        </div>
      </div>
    
      </div>
        
  )

}

export default AdminLogin;