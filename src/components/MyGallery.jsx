import React, { Component } from "react";
import { Alert, Col, Placeholder, Row } from "react-bootstrap";
import "../Netflix-assets/css/index.css";

class MyGallery extends Component {
  state = {
    movies: [],
    nameMovies: this.props.nameMovies,
    isError: false,
    isLoading: true,
  };

  showGallery = (nameMovies) => {
    fetch(`http://www.omdbapi.com/?apikey=8034813b&s=${nameMovies}&type=movie`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella fetch");
        }
        return response.json();
      })
      .then((movieData) => {
        const sixMovies = movieData.Search.slice(0, 6);
        this.setState({ movies: sixMovies, isLoading: false });
      })
      .catch((error) => {
        console.error("Errore:", error);
        this.setState({ isError: true, isLoading: false });
      });
  };
  componentDidMount() {
    this.state.nameMovies && this.showGallery(this.state.nameMovies);
  }

  render() {
    return (
      <>
        <Row className="gap-2">
          {this.state.isLoading && (
            <Col className="col-12 mb-4">
              <div className="border-0">
                <Placeholder as="h3" animation="glow">
                  <Placeholder xs={12} />
                </Placeholder>
              </div>
            </Col>
          )}

          {this.state.isError && (
            <Alert variant="danger">Si è verificato un errore</Alert>
          )}

          {!this.state.isLoading && !this.state.isError && (
            <>
              <h3 className="mb-4">
                The Best Of
                <strong>
                  {" " +
                    this.state.nameMovies.charAt(0).toUpperCase() +
                    this.state.nameMovies.slice(1)}
                </strong>
              </h3>
              {this.state.movies.map((movie) => (
                <Col key={movie.imdbID} className="col-6 col-md-4 col-lg mb-4">
                  <div className="border-0">
                    <img
                      src={movie.Poster}
                      className="w-max-100"
                      alt={movie.Title}
                      draggable="false"
                    />
                  </div>
                </Col>
              ))}
            </>
          )}
        </Row>
      </>
    );
  }
}

export default MyGallery;
