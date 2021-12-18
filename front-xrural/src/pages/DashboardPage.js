import { Link, Outlet, useNavigate } from "react-router-dom";
import Categorias from "../components/Categorias"; 

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div>
      <Link to="welcome">Say Welcome</Link>
      <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <Categorias></Categorias>
        </div>
        <div className="col-2"></div>
      </div>
      </div>

      <Outlet />

      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
