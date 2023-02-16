import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/Coming-Soon.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { WorkHistory } from './WorkHistory';
import { GitHubCard } from "./GitHubCard";


export const Projects = () => {

  const projects = [
    {
      title: "Project 1",
      description: "Coming Soon ",
      imgUrl: projImg4,
    },
    {
      title: "Project 2",
      description: "Coming Soon",
      imgUrl: projImg4,
    },
    {
      title: "Project3",
      description: "Coming Soon",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me</h2>
                <p>Since beginning my journey as a freelance digital developer in 2015, I've completed in-person and remote work for agencies, consulted with startups, and collaborated with talented engineers to create applications for both business and consumer use. I'm naturally curious, confident, and continually working on improving my skills one engineering problem at a time.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work History</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">GitHub</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Tab.Pane eventKey="second"> {/*Second Tab Resource Work History*/}
                    
                        <WorkHistory />
                        
                    </Tab.Pane>
                    <Tab.Pane eventKey="third"> {/*Third Tab Resource GitHub*/}
                    
                      <GitHubCard />
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
