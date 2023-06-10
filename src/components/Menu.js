import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">

          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/allcourses">All Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/allfaculty">All Faculty</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/studentlogin">Student Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/adminlogin">Admin Login</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/studentlogin">Student Login</a></li>
            <li><a class="dropdown-item" href="/adminlogin">Admin Login</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <Outlet/>
    </div>
  )
}
