import React, { useEffect, useState } from 'react'

export default function AllCourses() {
    const[courses,setcourses]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8285/courses")
    .then(res=>res.json())
    .then(val=>{

     setcourses(val)
})
    }

    ,[])
  return (
    <div>
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

    </div>
  )
}
