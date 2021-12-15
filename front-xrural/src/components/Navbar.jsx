import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Buscador from "../components/Buscador";
import MainMenu from "./MainMenu";

export default function Navbar() {
  return (
    <Fragment>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1">
        <div className="container">
          <div className="row">
            <div className="col-md-3 logo">
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

            <div className="col buscador">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <Buscador />
              </div>
            </div>
            <div className="col-md-3 menu">
              <MainMenu />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
