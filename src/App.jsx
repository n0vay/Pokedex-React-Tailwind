import React from "react";
import "./App.css";
import DiscoverPage from "./pages/DiscoverPage";
import PaginationPage from "./pages/Pagination";
import SearchPage from "./pages/SearchPage";
import RootLayout from "./Layouts/RootLayout";
import PokemonDetails, { pokemonDetailsLoader } from "./pages/PokemonDatails";


import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DiscoverPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="pagination" element={<PaginationPage />} />
      <Route path=":id" element={<PokemonDetails />} loader={pokemonDetailsLoader} /> 
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      {/* <SearchPage /> */}
      {/* <DiscoverPage /> */}
      {/* <PaginationPage /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
