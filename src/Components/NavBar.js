import React from 'react'

import {
    
    Link   
  } from "react-router-dom";
const NavBar =()=> {
    
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-black" >
                    <div className="container-fluid" >
                        <Link className="navbar-brand" style={{ color: "White" }} to="/"> &diams; NewsPanda &diams; </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" style={{ color: "White" }} aria-current="page" to="/">Home</Link></li>

                                <li className="nav-item"><Link className="nav-link" style={{ color: "White" }} to="/Business">Business  </Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: "White" }} to="/Entertainment">Entertainment </Link></li>                                
                                <li className="nav-item"><Link className="nav-link" style={{ color: "White" }} to="/Health">Health </Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: "White" }} to="/Science">Science </Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: "White" }} to="/Sports">Sports </Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: "White" }} to="/Technology">Technology  </Link></li>

                            </ul>
                            {/* **************search************ */}
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        )    
}

export default NavBar
