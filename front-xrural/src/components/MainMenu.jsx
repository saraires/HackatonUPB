import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./mainmenu.css";

export default function MainMenu() {
  return (
    <Fragment>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item home">
                <NavLink to="/" className="nav-link">
                  <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    Inicio
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nosotros">
                  <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    Nosotros
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hospedajes">
                  <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    Hospedajes
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/experiencias">
                  <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    Experiencias
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    Login
                  </span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    Quiero publicar un plan turístico
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
