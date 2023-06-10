import React, { useEffect, useState } from 'react'

export default function AdminControl() {
    const[courses,setCourse]=useState([]);
    const[faculties,setFaculties]=useState([]);
    const[students,setStudents]=useState([]);
    useEffect(()=>{
    fetch("http://localhost:8285/courses")
    .then(res=>res.json())
    .then(val=>{
        setCourse(val)
    })

    fetch("http://localhost:8285/faculty")
    .then(res=>res.json())
    .then(val=>{
        setFaculties(val);
    })

    fetch("http://localhost:8285/students")
    .then(res=>res.json())
    .then(val=>{
        setStudents(val);
    })

    },[])

  return (
    <div>
        <h1>All Courses</h1>
        <table class="table table-success table-striped">
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Discription</th>
                <th>Faculty Name</th>
                <th>Duration</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Fees</th>
            </tr>
        </thead>
        <tbody>
            {
                courses.length>0 && courses.map((val)=>
                <tr>
                    <td>{val.id}</td>
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

        <h1>All Faculty</h1>

        <table class="table table-success table-striped">
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Name </th>
                <th>Joined Date</th>
                <th>Salary</th> 
            </tr>
        </thead>
        <tbody>
            {
                faculties.length>0 && faculties.map((val)=>
                <tr>
                    <td>{val.id}</td>
                    <td>{val.facultyName}</td>
                    <td>{val.joinedDate}</td>
                    <td>{val.salary}</td>
                </tr>)
            }
        </tbody>
        </table>
        <h1>All Students</h1>
        <table class="table table-success table-striped">
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Mobile No.</th>
                <th>College Name</th>
                <th>City</th>
                <th>Pincode</th>
                <th>State</th>
            </tr>
        </thead>
        <tbody>
            {
                students.length>0 && students.map((val)=>
                <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.mobileNo}</td>
                    <td>{val.collegeName}</td>
                    <td>{val.city}</td>
                    <td>{val.pincode}</td>
                    <td>{val.state}</td>
                </tr>)
            }
        </tbody>
        </table>


    </div>
  )
}
