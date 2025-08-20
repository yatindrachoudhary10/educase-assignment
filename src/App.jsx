import "../src/App.css";
import Home from "./components/Home/home";
import Profile from "./components/Profile/profile";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;