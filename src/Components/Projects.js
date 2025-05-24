import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg5  from "../assets/img/project-img5.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Librarius",
      description: "Smart Library Management System",
      imgUrl: projImg1,
      githubUrl: "https://github.com/withyoutanvir/LMS",
    },
    {
      title: "Auth Lifecycle",
      description: "Advanced Authentication Lifecycle",
      imgUrl: projImg5,
      githubUrl: "https://github.com/withyoutanvir/LMS",
      deployedUrl:"https://auth-lifecycle.vercel.app/login",
    },
    {
      title: "D.I.V.S",
      description: "Decentralized verification System",
      imgUrl: projImg2,
      githubUrl: "https://github.com/withyoutanvir/Decentralized-Identity-Verification-System",
    },
    {
      title: "Gemini Clone",
      description: "Clone for gemini",
      imgUrl: projImg3,
      githubUrl: "https://github.com/withyoutanvir/Gemini",
    },
    {
      title: "Social Sphere",
      description: "Chatapp",
      imgUrl: projImg4,
      githubUrl: "https://github.com/withyoutanvir/SocialSphere",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    A showcase of my work across web development, blockchain,
                    AI, and decentralized systems. From building intuitive UIs
                    to implementing secure and scalable backend architectures,
                    these projects reflect my passion for innovation and
                    problem-solving.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Get in Touch</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">About Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          🌌 Gemini – A futuristic UI concept app focusing on
                          AI-based personal assistance with smooth transitions
                          and modular design. <br/>🧩 Divs – A creative component
                          library with reusable React blocks for rapid UI
                          development and customization. <br/>🌐 Social Sphere – A
                          mini social media app with posts, likes, and profile
                          management built using React and Node.js.<br/> 📚 LMS
                          (Learning Management System) – A full-stack platform
                          for course management, assignments, and user tracking.
                          Built with MERN stack for smooth admin and student
                          interaction.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
