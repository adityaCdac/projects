import React, { useState } from 'react'

export default function Register() {
const[name1,setName]=useState('');
const[collegeName1,setCollegeName]=useState('');
const[email1,setEmail]=useState('');
const[password1,setPassword]=useState('');
const[mobileNo1,setMobileNo]=useState('');
const[city1,setCity]=useState('');
const[state1,setState]=useState('');
const[pincode1,setPincode]=useState('');

const m1=(e)=>{
  setName(e.target.value)
  console.log(name1);
}

const m2=(e)=>{
  setCollegeName(e.target.value);
  console.log(collegeName1);
}

const m3=(e)=>{
  setEmail(e.target.value);
  console.log(email1);
}

const m4=(e)=>{
  setPassword(e.target.value);
  console.log(password1);
}

const m5=(e)=>{
  setMobileNo(e.target.value);
  console.log(mobileNo1);
}

const m6=(e)=>{
  setCity(e.target.value);
  console.log(city1);
}

const m7=(e)=>{
  setState(e.target.value);
  console.log(state1);
}

const m8=(e)=>{
  setPincode(e.target.value);
  console.log(pincode1);
}


  return (
    <div className='container'>
      <form>
        <div class="form-group col-md-6">
          <label for="inputName">Name</label>
          <input type="text" class="form-control" id="inputName" placeholder="Enter Your name" onChange={m1}></input>
        </div>
        <div class="form-group col-md-6">
          <label for="inputName">CollegeName</label>
          <input type="text" class="form-control" id="inputCollegeName" placeholder="Enter Your College name" onChange={m2}></input>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Email" onChange={m3}></input>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" onChange={m4}></input>
          </div>
          <div class="form-group col-md-6">
          <label for="inputNumber">Mobile Number</label>
          <input type="text" class="form-control" id="inputNumber" placeholder="Enter Mobile Number" onChange={m5}></input>
        </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" onChange={m6}></input>
          </div>
          <div class="form-group col-md-6">
          <label for="inputName">State</label>
          <input type="text" class="form-control" id="inputName" placeholder="Enter Your State" onChange={m7}></input>
        </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" onChange={m8}></input>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </div>
  )
}
