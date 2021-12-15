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
      <h1>Dashboard</h1>

      <Link to="welcome">Say Welcome</Link>
      <Categorias></Categorias>

      <Outlet />

      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
