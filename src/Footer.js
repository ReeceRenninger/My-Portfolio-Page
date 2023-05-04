import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import { Container } from 'react-bootstrap';

class Footer extends React.Component{
  render(){
    return(
      <>
      <Container id='footer'>
      <h4><AiOutlineCopyright />Reece Renninger</h4>
      <a href='https://github.com/ReeceRenninger'>
      <GoMarkGithub />
      </a>
      <a href='https://www.linkedin.com/in/reecerenninger/'>
      <BsLinkedin />
      </a>
      </Container>
      </>
    )
  }
}

export default Footer;