import { Component } from "react";
import avatar from "../Netflix-assets/assets/kids_icon.png";
import { Badge, Button, Col, Container, NavLink, Row } from "react-bootstrap";
import "../Netflix-assets/css/settings.css";

class Settings extends Component {
  render() {
    return (
      <>
        <div className="App bg-light">
          <section id="card">
            <Container fluid id="principale" className="  mb-5">
              <Row>
                <div className="settings">
                  <h2 className="fw-bold mt-4">Account</h2>
                </div>
                <Col className="col-12 col-md-4 col-lg-4">
                  <Col className="mt-3 col-md-9" id="membership-billing">
                    <p className="mb-2">MEMBERSHIP & BILLING</p>
                    <div className="d-block mb-3">
                      <Button className="btn btn-secondary rounded-0 me-3 btn-lg">
                        Cancel Membership
                      </Button>
                    </div>
                  </Col>
                </Col>
                <Col className="col-12 col-md-4 col-lg-4">
                  <div>
                    <p>student@strive.school</p>
                    <p className="color">Password: **********</p>
                    <p className="color">Phone: 321 044 1279</p>
                  </div>
                </Col>
                <Col className="col-12 col-md-4 col-lg-4">
                  <Col>
                    <div>
                      <NavLink href="#" className="d-block">
                        Change account email
                      </NavLink>
                      <NavLink href="#" className="d-block">
                        Change password
                      </NavLink>
                      <NavLink href="#" className="d-block">
                        Change phone number
                      </NavLink>
                    </div>
                  </Col>
                </Col>
              </Row>

              <Row>
                <Col></Col>
                <Col className="col-12 col-md-4 col-lg-4">
                  <div>
                    <span>
                      <i className="bi bi-paypal"></i>
                      <p className="d-inline-block fw-bold mx-1">Paypal</p>
                      <p className="d-inline-block fw-bold">
                        {" "}
                        admin@strive.school
                      </p>
                    </span>
                  </div>
                </Col>
                <Col className="col-12 col-md-4 col-lg-4">
                  <div>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Update payment info
                    </NavLink>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Billing details{" "}
                    </NavLink>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col></Col>
                <Col></Col>
                <Col className="col-12 col-md-4 col-lg-4">
                  <div>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Reedem gift card or promo code
                    </NavLink>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Where to buy gift cards
                    </NavLink>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="col-12 col-md-4 col-lg-4">
                  <Col className="mt-3 col-md-9" id="membership-billing">
                    <p className="mb-2">PLAN DETAILS</p>
                  </Col>
                </Col>
                <Col>
                  <div>
                    <p className="d-inline-block">Premium</p>
                    <Badge pill text="dark" className="bg-light fw-bold">
                      ULTRA HD
                    </Badge>
                  </div>
                </Col>
                <Col className="col-12 col-md-4 col-lg-4">
                  <Col className="col-12 col-md-4 col-lg-4">
                    <div>
                      <NavLink href="#" className="d-block">
                        {" "}
                        Change plan{" "}
                      </NavLink>
                    </div>
                  </Col>
                </Col>
              </Row>

              <Row>
                <Col className="col-12 col-md-4 col-lg-4">
                  <Col className="mt-3 col-md-9" id="membership-billing">
                    <p className="mb-2">SETTINGS</p>
                  </Col>
                </Col>
                <Col className="col-12 col-md-4 col-lg-4">
                  <div>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Parental controls{" "}
                    </NavLink>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Test participation{" "}
                    </NavLink>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Manage dowload devices{" "}
                    </NavLink>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Activate a device
                    </NavLink>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Recent device streaming activity{" "}
                    </NavLink>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Sign out of all devices
                    </NavLink>
                  </div>
                </Col>
                <Col className="col-12 col-md-4 col-lg-4">
                  <Col></Col>
                </Col>
              </Row>

              <Row>
                <Col className="col-12 col-md-4 col-lg-4">
                  <Col className="mt-3 col-md-9" id="membership-billing">
                    <p className="mb-2">MY PROFILE</p>
                  </Col>
                </Col>
                <Col className="col-12 col-md-4 col-lg-4">
                  <div>
                    <img
                      src={avatar}
                      className="img-fluid d-inline-block"
                      alt="kids"
                      width="30"
                    />
                    <p className="d-inline-block fw-bold">Strive Student</p>
                  </div>
                  <div>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Language{" "}
                    </NavLink>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Playback settings
                    </NavLink>
                    <NavLink href="#" className="d-block">
                      {" "}
                      Subtitle appearance{" "}
                    </NavLink>
                  </div>
                </Col>
                <Col className="col-12 col-md-2 col-lg-2">
                  <Col className="mt-3 col-md-2" id="membership-billing">
                    <div>
                      <NavLink href="#" className="d-block">
                        {" "}
                        Viewing activity{" "}
                      </NavLink>
                      <NavLink href="#" className="d-block">
                        {" "}
                        Ratings{" "}
                      </NavLink>
                    </div>
                  </Col>
                </Col>
                <Col className="col-12 col-md-2 col-lg-2">
                  <Col className="col-12 col-md-2 col-lg-4">
                    <div className="mb-5">
                      <NavLink href="#" className="d-block">
                        {" "}
                        Manage profiles{" "}
                      </NavLink>
                      <NavLink href="#" className="d-block">
                        {" "}
                        Add profile email{" "}
                      </NavLink>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Settings;
