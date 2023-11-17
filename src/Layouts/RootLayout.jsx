import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
const RootLayout = () => {
  return (
    <div className="">
      <header className="fixed w-screen">
        <div className=" bg-orange-400 p-2 top-0 ">
          <nav className=" flex justify-between">
            <div className="flex flex-row">
              <div>
                <img src={logo} className="h-12" alt="pokemon logo" />
              </div>
              <div className="flex  p-3">
                <NavLink to="/" className="px-2">
                  <div className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Discover
                  </div>
                </NavLink>
                <NavLink to="/search" className="px-2">
                  <div className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Search
                  </div>
                </NavLink>
                <NavLink to="/pagination" className="px-2">
                  <div className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Pagination
                  </div>
                </NavLink>
                <NavLink to="/discover" className="px-2">
                  <div className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Filter
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="flex flex-row justify-end ">
              <div className="flex p-3">
                <NavLink to="/search" className="px-2">
                  <div className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Log In
                  </div>
                </NavLink>
                <NavLink to="/pagination" className="px-2">
                  <div className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                  </div>
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
        <div className="bg-gray-700 h-2" />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
