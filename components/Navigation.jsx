import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary"  data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" href="/">SkillHunter</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" href='/services'>Services</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      </nav>  
  )
}

export default Navigation