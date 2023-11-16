import { Outlet, NavLink } from "react-router-dom";
const SideBarDiscover = () => {
  return (
    <div>
      <div class="fixed top-23 left-0 z-40 w-64 h-screen ">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div class="space-y-2 font-medium">
            <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <div class="ms-3">Discover</div>
            </div>
            <NavLink to="/discover/search">
              <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div class="ms-3">Search</div>
              </div>
            </NavLink>
            <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <div class="ms-3">Filter</div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SideBarDiscover;
