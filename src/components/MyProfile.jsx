import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  Form,
  NavLink,
  Row,
} from "react-bootstrap";
import avatar from "../Netflix-assets/assets/kids_icon.png";
import "../Netflix-assets/css/profile.css";

let MyProfile = () => {
  return (
    <>
      <section className="d-flex" id="profile">
        <div className="mt-5 align-content" id="container-profile">
          <form>
            <div className="mb-3">
              <Container className="container mt-5">
                <Row>
                  <h3 className="mb-4">Edit Profile</h3>
                  <Col className="col-md-3 position-relative">
                    <img src={avatar} className="img-fluid" alt="kids" />
                  </Col>
                  <Col className="col-md-9">
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Strive Student"
                    />
                    <p className="d-block mt-3 mb-3">Language:</p>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="btn btn-outline-light rounded-0 bg-dark"
                      >
                        English
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">English</Dropdown.Item>
                        <Dropdown.Item href="#">Italian</Dropdown.Item>
                        <Dropdown.Item href="#">Spanish</Dropdown.Item>
                        <Dropdown.Item href="#">French</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Col className="mt-3 col-md-9" id="maturity-ratings">
                      <p className="mb-2">Maturity Settings:</p>
                      <div className="d-block mb-3">
                        <Button className="btn btn-secondary rounded-0 me-3 btn-lg">
                          ALL MATURITY RATINGS
                        </Button>
                        <p className="mb-2" id="show-titles">
                          Show titles of{" "}
                          <NavLink className="fw-bold text-decoration-none">
                            all maturity ratings
                          </NavLink>{" "}
                          for this profile.
                        </p>
                        <Col className="mt-3 col-md-9">
                          <Button
                            type="button"
                            className="btn btn-outline-secondary bg-dark rounded-0 me-3 btn-lg"
                            id="btn-edit"
                          >
                            EDIT
                          </Button>
                        </Col>
                      </div>
                    </Col>
                    <Col className="col-md-9 mt-3" id="autoplay">
                      <p className="mb-2">Autoplay controls</p>
                      <Form.Check
                        className="form-check mb-2"
                        type="checkbox"
                        id="check1"
                        label="Autoplay next episode in a series on all devices."
                      />
                      <Form.Check
                        className="form-check mb-3"
                        type="checkbox"
                        id="check2"
                        label="Autoplay previews while browsing on all devices."
                      />
                    </Col>
                  </Col>
                </Row>
              </Container>
            </div>
          </form>
          <ButtonGroup className="btn-group" id="btn-group">
            <Button
              type="button"
              className="btn btn-outline-secondary bg-dark bg-dark rounded-0 me-3"
              id="btn-save"
            >
              SAVE
            </Button>
            <Button
              type="button"
              className="btn btn-outline-secondary bg-dark rounded-0 me-3"
              id="btn-cancel"
            >
              CANCEL
            </Button>
            <Button
              type="button"
              className="btn btn-outline-secondary bg-dark rounded-0 me-3"
              id="btn-delete"
            >
              DELETE PROFILE
            </Button>
          </ButtonGroup>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
