import { Fragment } from "react";
import "./footer.css";

export default function Footer() {
  return (
    <Fragment>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">Pie de página.</span>
        </div>
      </footer>
    </Fragment>
  );
}
