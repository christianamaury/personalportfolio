//React-multi-Carousel Libraries
import {Container, Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <section className="skill" id="skills">
    <Container>
      <Row>
      <Col>
        <div className="skill-bx">
        <h2>
          Skills
        </h2>
        <p>
           About my Skills here
        </p>
        <Carousel responsive={responsive} infinite={true} className="skills-slider">
          <div className="item">
            <img src={meter1} alt="Image"/>
            <h5> Front End Web Development </h5>
          </div>

          <div className="item">
            <img src={meter2} alt="Image"/>
            <h5> WordPress Development </h5>
          </div>

          <div className="item">
            <img src={meter3} alt="Image"/>
            <h5> iOS Development </h5>
          </div>

          <div className="item">
            <img src={meter1} alt="Image"/>
            <h5> Game Development </h5>
          </div>

        </Carousel>
        </div>
      </Col>
      </Row>
    </Container>
    <img className="background-image-left" src={colorSharp}/>
    </section>
  )
}
