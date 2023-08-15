import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Header = () =>{
 
    return (
      <>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link><Link className='nav-links' to="/home">Home</Link></Nav.Link>
        <Nav.Link><Link className='nav-links' to="/projects">Projects</Link></Nav.Link>
        <Nav.Link><Link className='nav-links' to="/about">About</Link></Nav.Link>
      </Nav>
      </>
    );
  
}

export default Header;