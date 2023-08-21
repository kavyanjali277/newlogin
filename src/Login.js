import React, { useState} from 'react'
import './login.css';
import { useNavigate } from 'react-router-dom';
import {Link } from 'react-router-dom';
const Login=()=> {
  const history = useNavigate();
  const [values, setValues]=useState({
    email:'',
    password:''
  });
  
  const input = (event)=>{
  const {value,name}=event.target;
  setValues(()=>{
    return{
      ...values,
      [name]:value
    }
  })
}
  const eventHandele=(event)=>{
    event.preventDefault();
    const getUserList = localStorage.getItem("usersData");
    console.log(getUserList);
    const {email,password} = values;
    if( email===""){
      alert("please enter the email")
    }
    else if(!email.includes("@")){
      alert("please enter the valid email")
    }
    else if( password === ""){
      alert("please enter the password")
    }else{
      if(getUserList && getUserList.length){
        const listData = JSON.parse(getUserList);
        const userLogin = listData.filter((element,index)=>{
          return element.email === email && element.password=== password
        }
        );
         console.log(userLogin);
         if(userLogin.length ===0){
          alert("invalid details")
         }
         else{
            console.log("User detailes are valid")
            localStorage.setItem("user_signin", JSON.stringify(getUserList))
            history('/home');
         }
       }}}
    return (
    <div className="main_container">
      <div className="sub-container">   
        <form  action="" onSubmit={eventHandele}>
          <h1 class="Main-heading">Sign-In</h1>
          <div>
            <label htmlFor="email"className="heading">Email</label>
            <input type="email" placeholder="Enter your Email id"  className="form-control rounded-0" name="email" onChange={input}></input>
          </div>
          
          <div>
            <label htmlFor="password"className="heading">Password</label>
            <input type="password" placeholder="Enter your password" className="form-control rounded-0" name="password" onChange={input}></input>
          </div>
          <Link type="submit" to='/home' onSubmit={eventHandele} className="btn btn-primary w-100 mt-3">Log in</Link>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
