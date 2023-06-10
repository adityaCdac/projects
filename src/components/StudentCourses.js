import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function StudentCourses() {
    const location=useLocation();
    const[courses,setcourses]=useState([]);
    const[other,setOther]=useState([])
    const [id1,setId]=useState();
    const [city1,setCity]=useState();
    const [collegeName1,setCollegeName]=useState();
    const [email1,setEmail]=useState();
    const [mobileNo1,setMobileNo]=useState();
    const [name1,setName]=useState();
    const [password1,setPassword]=useState();
    const [pincode1,setPincode]=useState();
    const [state1,setState]=useState();

    useEffect(()=>{
      fetch(`http://localhost:8285/student/courses/${location.state.userid}`)
      .then(res=>res.json())
      .then(val=>{
         setcourses(val)
      })

      fetch(`http://localhost:8285/student/other-courses/${location.state.userid}`)
      .then(res=>res.json())
      .then(val=>{
       setOther(val)
      })



  }

  ,[])

  useEffect(()=>{
    fetch(`http://localhost:8285/students/${location.state.userid}`)
    .then(res=>res.json())
    .then(val=>{
       setId(val.id);
       setCity(val.city);
       setCollegeName(val.collegeName);
       setEmail(val.email);
       setId(val.id);
       setMobileNo(val.mobileNo);
       setName(val.name);
       setPassword(val.password);
       setPincode(val.pincode);
       setState(val.state);

    })
  },[])

  const buy=(id)=>{
    fetch(`http://localhost:8285/buy/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city:city1,
          collegeName:collegeName1,
          email:email1 ,
          id:id1,
          mobileNo:mobileNo1,
          name:name1,
          password: password1,
          pincode:pincode1,
          state:state1
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setId(data);   
        });
   
    

    
  }
  return (
    <div>
        <h1>Your Courses</h1>
        <table class="table table-success table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Discription</th>
                <th>Faculty Name</th>
                <th>Duration(In Month)</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Fees</th>
            </tr>
        </thead>
        <tbody>
            {
                courses.length>0 && courses.map((val)=>
                <tr>
                    <td>{val.courseName}</td>
                    <td>{val.courseDiscription}</td>
                    <td>{val.faculty.facultyName}</td>
                    <td>{val.duration}</td>
                    <td>{val.startDate}</td>
                    <td>{val.endDate}</td>
                    <td>{val.fees}</td>
                </tr>)
            }
        </tbody>
        </table>

        <h1>Other Courses</h1>
        <table class="table table-success table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Discription</th>
                <th>Faculty Name</th>
                <th>Duration(In Month)</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Fees</th>
            </tr>
        </thead>
        <tbody>
            {
                other.length>0 && other.map((val)=>
                <tr>
                    <td>{val.courseName}</td>
                    <td>{val.courseDiscription}</td>
                    <td>{val.faculty.facultyName}</td>
                    <td>{val.duration}</td>
                    <td>{val.startDate}</td>
                    <td>{val.endDate}</td>
                    <td>{val.fees}</td>
                    <td>
                        <Link onClick={()=>{buy(val.id)}}>Buy</Link>
                    </td>
                </tr>)
            }
        </tbody>
        </table>
        
    </div>
  )
}
