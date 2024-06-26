import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
const RootLayout = () => {
  return (
    <div className="relative h-screen w-screen">
      <header className="absolute top-0 left-0 w-full z-10">
        <div className=" bg-gray-800 p-2 top-0 ">
          <nav className="flex justify-between">
            <div className="flex flex-row">
              <NavLink to="/" className="px-2">
                <div>
                  <img src={logo} className="h-12" alt="pokemon logo" />
                </div>
              </NavLink>
              <div className="flex  p-3">
                <NavLink to="/discover" className="px-2">
                  <div className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Discover Pokemon
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="flex flex-row justify-end ">
              <div className="flex p-3">
                <NavLink to="/login" className="px-2">
                  <div className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Log In
                  </div>
                </NavLink>
                <NavLink to="/login" className="px-2">
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
        <div className="pt-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
