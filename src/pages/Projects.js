import React from "react";
import Carousel from 'react-bootstrap/Carousel';

class Projects extends React.Component{
  render(){
    return(
      <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/game_title.png"
          alt="TRYING TO SPACE THIS OUT ENOUGH TO MOVE CAROUSEL BUTTONS APART"
        />
        <Carousel.Caption>
          <h3>201 Group Project (Code Fellows Seattle)</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>301 Group Project (Code Fellows Seattle)</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>401 Group Project (Code Fellows Seattle)</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    )
  }
}

export default Projects;