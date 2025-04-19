import { Col } from "react-bootstrap";
import { FaArrowUpRightFromSquare } from "react-icons/fa6"; // modern arrow icon

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="project-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Code <FaArrowUpRightFromSquare style={{ marginLeft: "6px" }} />
          </a>
        </div>
      </div>
    </Col>
  );
};
