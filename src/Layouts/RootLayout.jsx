import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>My Pokedex is here</h1>
          <div className="flex">
            <img src={logo} className="h-12" alt="pokemon logo" />
          </div>
          <NavLink to="/" className="">
            Discover
          </NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/pagination">Pagination</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
