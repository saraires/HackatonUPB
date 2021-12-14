import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <Fragment>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="container">
          <div className="row">
            <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
              <NavLink to="/">
                {" "}
                <img
                  className="d-block mx-auto "
                  src={process.env.PUBLIC_URL + "/img/logo.png"}
                  alt=""
                  width="110"
                  height="90"
                />
              </NavLink>
            </div>

            <div className="col">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                  <li className="nav-link px-2 text-white">
                    <NavLink to="/hospedajes" className={({ isActive }) => (isActive ? "active" : "")}>
                      Hospedajes
                    </NavLink>
                  </li>
                  <li className="nav-link px-2 text-white">
                    <NavLink to="/experiencias" className={({ isActive }) => (isActive ? "active" : "")}>
                      Experiencias
                    </NavLink>
                  </li>
                  <li className="nav-link px-2 text-white">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/nosotros">
                      Nosotros
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 text-end">
              <NavLink to="/users">
                <button type="button" className="btn btn-outline-primary me-2">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button type="button" className="btn btn-primary">
                  Sign-up
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
