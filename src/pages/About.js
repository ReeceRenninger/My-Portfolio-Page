import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class About extends React.Component{
  render(){
    return(
      <Container id="aboutMeCard">
      <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imgs/Iwoparade-me.jpg" />
      <Card.Body>
        <Card.Title>Hello! Thanks for visiting my page!</Card.Title>
        <Card.Text>
      👋 I'm Reece Renninger. I am a United States Marine Corps veteran who is becoming a Full-Stack JavaScript Developer while attending Code Fellows Seattle. I attended California State University Long Beach from 2017 to 2020 where I earned a BA in Psychology. After I was exposed to the field of User Psychology, I became fascinated with being able to apply psychological methods to coding design and implementation. Thanks for visiting my portfolio page, if you want to reach out to me directly please use the linkedin link below.
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    )
  }
}

export default About;