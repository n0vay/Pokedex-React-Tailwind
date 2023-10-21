import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>My Pokedex</h1>
          <NavLink to="/">Discover</NavLink>
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
