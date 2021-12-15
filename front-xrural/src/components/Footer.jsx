import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <Fragment>
      <footer className="footer py-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-sm-4 col-xs-12 text-center text-sm-left justify-content-center align-content-center">
              <span className="text-muted">Experiencia Rural 2021</span>
            </div>
            <div className="col-sm-8 col-xs-12">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li className="nav-link px-2 ">
                  <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-link px-2 ">
                  <NavLink to="/hospedajes" className={({ isActive }) => (isActive ? "active" : "")}>
                    Hospedajes
                  </NavLink>
                </li>
                <li className="nav-link px-2 ">
                  <NavLink to="/experiencias" className={({ isActive }) => (isActive ? "active" : "")}>
                    Experiencias
                  </NavLink>
                </li>
                <li className="nav-link px-2">
                  <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/nosotros">
                    Nosotros
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
