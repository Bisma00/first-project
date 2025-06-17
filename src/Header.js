import { Link, Outlet } from "react-router-dom";
import "./header.css";
import { CiAlignTop } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div className="nav-bar">
        <Link to="/">
          <CiAlignTop className="logo" />
        </Link>

        <Link>
          <button className="btn"> See Themes</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Header;
