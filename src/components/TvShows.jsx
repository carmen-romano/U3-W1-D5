import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import "../Netflix-assets/css/index.css";

const TvShows = () => {
  return (
    <div className="d-flex justify-content-between">
      <Dropdown className="dropdown-center d-flex align-items-start">
        <h3 className="mb-4">Tv Shows</h3>
        <DropdownToggle
          className="btn dropdown-toggle btn btn-outline-light rounded-0 mx-3 bg-transparent text-light"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Genres
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          <DropdownItem className="dropdown-item" href="#">
            Children & Family Movies
          </DropdownItem>
          <DropdownItem className="dropdown-item" href="#">
            Documentaries
          </DropdownItem>
          <DropdownItem className="dropdown-item" href="#">
            Action & Adventure
          </DropdownItem>
          <DropdownItem className="dropdown-item" href="#">
            Anime
          </DropdownItem>
          <DropdownItem className="dropdown-item" href="#">
            Music & Musicals
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div className="dropdown-center d-flex align-items-start">
        <div className="icon">
          <i className="bi bi-card-text active"></i>
        </div>
        <div className="icon">
          <i className="bi bi-grid-fill disabled"></i>
        </div>
      </div>
    </div>
  );
};

export default TvShows;
