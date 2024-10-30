import { NavLink } from "react-router-dom";
import "./Header.css"


const Header = () => {
    return (
      <div>
        <h2 className="font-bold text-center text-5xl">Welcome to MealDB</h2>
        <div className="flex items-center gap-12 justify-center mt-6 text-lg font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/pets">Pets</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    );
};

export default Header;