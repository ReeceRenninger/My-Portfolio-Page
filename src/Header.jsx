import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import { Container } from 'react-bootstrap';

const handleAnchorClick = (event) => {
  event.preventDefault(); // Prevent the default link behavior
  const url = event.currentTarget.href;
  window.open(url, '_blank', 'noopener,noreferrer'); // Open link in new tab
};

const Header = () =>{
 
    return (
      <header className="header">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link><Link className='nav-links' to="/home">Home</Link></Nav.Link>
        <Nav.Link><Link className='nav-links' to="/projects">Projects</Link></Nav.Link>
        <Nav.Link><Link className='nav-links' to="/about">About</Link></Nav.Link>
      </Nav>

      <Container className='contact-info'>
      <h4><AiOutlineCopyright />Reece Renninger</h4>
      <a href='https://github.com/ReeceRenninger' onClick={handleAnchorClick}>
      <GoMarkGithub />
      </a>
      <a  href='https://www.linkedin.com/in/reecerenninger/' onClick={handleAnchorClick}>
      <BsLinkedin />
      </a>
      </Container>

      </header>
    );
  
}

export default Header;