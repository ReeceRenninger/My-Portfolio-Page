import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import { Container } from 'react-bootstrap';

const handleAnchorClick = (event) => {
  event.preventDefault(); // Prevent the default link behavior
  const url = event.currentTarget.href;
  window.open(url, '_blank', 'noopener,noreferrer'); // Open link in new tab
};

const Footer = () =>{
  
    return(
      <>
      <Container id='footer'>
      <h4><AiOutlineCopyright />Reece Renninger</h4>
      <a href='https://github.com/ReeceRenninger' onClick={handleAnchorClick}>
      <GoMarkGithub />
      </a>
      <a  href='https://www.linkedin.com/in/reecerenninger/' onClick={handleAnchorClick}>
      <BsLinkedin />
      </a>
      </Container>
      </>
    )
}

export default Footer;