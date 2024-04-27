import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Netflix-assets/assets/netflix_logo.png";
import avatar from "../Netflix-assets/assets/avatar.png";
import MyProfile from "./MyProfile";
import Settings from "./Settings";
import MyGallery from "./MyGallery";
import TvShows from "./TvShows";

class MyNavbar extends Component {
  state = {
    showProfile: false,
    showSettings: false,
    showGallery: true,
  };

  toggleProfile = () => {
    this.setState({
      showProfile: true,
      showSettings: false,
      showGallery: false,
    });
  };

  toggleSettings = () => {
    this.setState({
      showProfile: false,
      showSettings: true,
      showGallery: false,
    });
  };

  toggleGallery = () => {
    this.setState({
      showProfile: false,
      showSettings: false,
      showGallery: true,
    });
  };

  render() {
    return (
      <>
        <Navbar expand="lg" className=" navbar-dark bg-dark">
          <Container>
            <Navbar.Brand onClick={this.toggleGallery}>
              <img src={logo} alt="netflix-logo" width={80} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto gap-3">
                <Nav.Link onClick={this.toggleGallery}>Home</Nav.Link>
                <Nav.Link href="#tvShows" disabled>
                  Tv Shows
                </Nav.Link>
                <Nav.Link href="#Movies" disabled>
                  Movies
                </Nav.Link>
                <Nav.Link href="#RecentlyAdded" disabled>
                  Recently Added
                </Nav.Link>
                <Nav.Link href="#link" disabled>
                  My List
                </Nav.Link>
              </Nav>
              <Nav className="gap-3">
                <Nav.Link href="#link" disabled>
                  <i className="bi bi-search" id="iSearch"></i>
                </Nav.Link>
                <Nav.Link href="kids" disabled>
                  KIDS
                </Nav.Link>
                <Nav.Link href="#link" disabled>
                  <i className="bi bi-bell-fill"></i>
                </Nav.Link>
                <NavDropdown
                  title={<img src={avatar} alt="avatar-profile" width={25} />}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={this.toggleProfile}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={this.toggleSettings}>
                    Settings
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {this.state.showProfile && <MyProfile />}

        {this.state.showSettings && <Settings />}

        {this.state.showGallery && (
          <>
            <main id="card" className=" text-white mt-4 bg-dark">
              <section id="card">
                <TvShows />
                <MyGallery nameMovies={"batman"} />
                <MyGallery nameMovies={"star wars"} />
                <MyGallery nameMovies={"game of thrones"} />
              </section>
            </main>
          </>
        )}
      </>
    );
  }
}

export default MyNavbar;
