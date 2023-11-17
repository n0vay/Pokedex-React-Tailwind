import { Outlet, NavLink } from "react-router-dom";
const SideBarDiscover = () => {
  return (
    <div>
      <div className="fixed top-20 left-0 z-40 w-64 h-screen">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="space-y-2 font-medium">
            <NavLink to="/discover/">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="ms-3">Discover</div>
              </div>
            </NavLink>
            <NavLink to="/discover/search">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="ms-3">Search</div>
              </div>
            </NavLink>
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <div className="ms-3">Filter</div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SideBarDiscover;
