import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css';

const Signin=()=> {
  const history = useNavigate();
  const [values, setValues]=useState({
    name:'',
    email:'',
    password:''
  });
  const [data] = useState([]);
  const input = (event)=>{
  const {value, name}=event.target;
  setValues(()=>{
    return{
       ...values,
       [name]:value
    }
  })

  console.log(values)
}
  const eventHandele=(event)=>{
    event.preventDefault();
    const {name,email,password} = values;
    console.log(values)
    if( name===""){
      alert("please enter the name")
    }else if( email===""){
      alert("please enter the email")
    }
    else if(!email.includes("@")){
      alert("please enter the valid email")
    }
    else if( password ==""){
      alert("please enter the password")
    }else{
      console.log("success")
      localStorage.setItem("usersData", JSON.stringify({...data, values}));
      history('/login');

    }
}
  return (
    <div className="main_container">
      <div className="sub-container">   
        <form onSubmit={eventHandele} >
          <h1 className="Main-heading">Sign-Up</h1>
          <div>
            <label htmlFor="name"className="heading">Name</label>
            <input type="name" placeholder="Enter your name" className="form-control rounded-0" name="name" onChange={input}></input>
          </div>
          <div>
            <label htmlFor="email"className="heading">Email</label>
            <input type="email" placeholder="Enter your Email id" className="form-control rounded-0" name="email" onChange={input}></input>
          
          <div>
            <label htmlFor="password"className="heading">Password</label>
            <input type="password" placeholder="Enter your password" onChange={input} className="form-control rounded-0" name="password" ></input>
          </div>
          <button type="submit"  className="btn btn-primary w-100 mt-3">Submit</button>
          <p>if your already have account <span><Link to='/login'>Sign in</Link></span></p>
          
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
