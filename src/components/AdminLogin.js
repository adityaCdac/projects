import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const[user,setUsername]=useState('');
  const[pass,setPassword]=useState('');
  const navigate=useNavigate();

  var m1 = (e) => {
    setUsername(e.target.value);
  };
  var m2 = (e) => {
    setPassword(e.target.value);
  };

  const myfunction=()=>{
    fetch("http://localhost:8285/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password:pass,
        id: user
      }),
    })
      .then((response) => {
          if(response.status===200){
            navigate('/admincontrol')
          }
          else
          {
            alert("Please enter valid username and password");
          }
      })
      

  }
  return (
    <div className='container'>
       <div class="col-12">
       <h4>Enter username</h4>
        <input type="email" onChange={m1} placeholder='Enter username'></input><br/>
        <h4>Enter Password:</h4>
        <input type="password" onChange={m2} placeholder='Enter password'></input><br/>

        <div class="col-12">
            <button type="submit" onClick={myfunction} class="btn btn-primary">Sign in</button>
        </div>
        </div>
       
    </div>
  )
}
