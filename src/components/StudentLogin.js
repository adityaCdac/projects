import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function StudentLogin() {
    const [email1, setEmail] = useState("");
    const [pass1, setPass] = useState("");
    const [id,setId]=useState(0);
    var navigate=useNavigate()
    var m1 = (e) => {
    setEmail(e.target.value);
    console.log(email1);
  };
  var m2 = (e) => {
    setPass(e.target.value);
    console.log(pass1);
  };
  useEffect(()=>{
      if(id>0){
        navigate("/studentcourses",{state:{userid:id}});
      }
        
  },[id])

  var myfunction = () => {
    fetch("http://localhost:8285/student-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailId: email1,
        password: pass1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setId(data);
      
      });

  };
    return (
    <div className='container'>
       <div class="col-12">
       <h4>Enter Email Id</h4>
        <input type="email" onChange={m1} placeholder='Enter email Id'></input><br/>
        <h4>Enter Password:</h4>
        <input type="password" onChange={m2} placeholder='Enter password'></input><br/>

        <div class="col-12">
            <button type="submit" onClick={myfunction} class="btn btn-primary">Sign in</button>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
        </div>
       
    </div>
    )
}
