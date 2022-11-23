import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
//Bootstrap Nav;

import {ProjectCard} from './ProjectsCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

  //..Needs to hold information related to the Projects; Objects
  const projects = [
    {
      title: "Title Text 1",
      description: "Description Text",
      imgUrl: projImg1,
    },
    {
      title: "Title Text 2",
      description: "Description Text",
      imgUrl: projImg2,
    },
    {
      title: "Title Text 3",
      description: "Description Text",
      imgUrl: projImg3,
    },
  ];

  return (
          <section className="project" id="project">
            <Container>
              <Row>
                <Col>
                  <h2> Projects </h2>
                  <p> Projects Description here </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" disabled>
                        Tab Three
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Row>
                    {
                      projects.map((project, index) => {
                      return (
                        <ProjectCard
                        key={index}
                        {...project}
                        />
                        )
                      })
                    }
                    </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      Some Context2
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      Some Context3
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
                </Col>
              </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
          </section>
  )
}
