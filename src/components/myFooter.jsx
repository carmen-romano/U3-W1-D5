import { Container, Row, Col, Button, NavLink } from "react-bootstrap";
import "../Netflix-assets/css/index.css";

let MyFooter = () => {
  return (
    <footer className="container w-max-footer">
      <Container>
        <div className="icon-group d-flex gap-3 mb-3">
          <div className="fb">
            <i className="bi bi-facebook fs-3" />
          </div>
          <div className="ig">
            <i className="bi bi-instagram fs-3" />
          </div>
          <div className="lk">
            <i className="bi bi-linkedin fs-3" />
          </div>
          <div className="yt">
            <i className="bi bi-youtube fs-3" />
          </div>
        </div>

        <Row>
          <Col md={3}>
            <div className="mb-3">
              <NavLink href="#">Audio and Subtitles</NavLink>
            </div>
            <div className="mb-3">
              <NavLink href="#">Media Center</NavLink>
            </div>
            <div className="mb-3">
              <NavLink href="#">Privacy</NavLink>
            </div>
            <div className="mb-3">
              <NavLink href="#">Contact Us</NavLink>
            </div>
          </Col>
          <Col md={3}>
            <div className="mb-3">
              <NavLink href="#">Audio Description</NavLink>
            </div>
            <div className="mb-3">
              <NavLink href="#">Investor Relations</NavLink>
            </div>
            <div className="mb-3">
              <NavLink href="#">Legal Notices</NavLink>
            </div>
          </Col>
          <Col md={3}>
            <div className="mb-3">
              <NavLink href="#">Help Center</NavLink>
            </div>
            <div className="mb-3">
              <NavLink href="#">Jobs</NavLink>
            </div>
            <div className="mb-3">
              <NavLink href="#" className="fs-6">
                Cookie Preferences
              </NavLink>
            </div>
          </Col>
          <Col md={3}>
            <div className="mb-3">
              <NavLink href="#">Gift Cards</NavLink>
            </div>
            <div className="mb-3">
              <NavLink href="#">Terms of Use</NavLink>
            </div>
            <div className="mb-3">
              <NavLink href="#" className="fs-6">
                Corporate Information
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
      <Button
        className="outline-secondary rounded-0 d-lg-block mb-3 btn-footer"
        id="btn-footer"
      >
        Service Code
      </Button>
      <span className="d-block text-center mt-2">
        © 1997-2024 Netflix, Inc. All Rights Reserved.
      </span>
    </footer>
  );
};

export default MyFooter;
