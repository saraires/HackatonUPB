import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./carrusel.css";

export default function Carrusel() {
  return (
    <Fragment>
      <div class="container-fluid p-0">
        <div id="myCarousel" className="carousel mb-4 slide banner-home" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="active"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item ad1">
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Atrévete a vivir!</h1>
                  <p>Vive, difruta, aprende y comparte</p>
                  <p>
                    <NavLink className="btn btn-primary" to="#">
                      Experiencias rurales
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ad2 active">
              <div className="container">
                <div className="carousel-caption">
                  <h1>Comparte la noche en un lugar inolvidable</h1>
                  <p>En medio de la naturaleza encontrarás variedad de hospedajes para disfrutar</p>
                  <p>
                    <NavLink className="btn  btn-primary" to="#">
                      Conoce más
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ad3">
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Delicioso!</h1>
                  <p>Conoce más sobre la cultura del campo a través de su gastronomía</p>
                  <p>
                    <NavLink className="btn btn-primary" to="#">
                      Ver más
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
}
