import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>

      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* ✅ Correct dynamic details route */}
      <Route path="/details/:type/:id" element={<Single />} />

    </Route>
  )
);
