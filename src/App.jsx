import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import './App.css'

//Layout
import RootLayout from "./layouts/RootLayout.jsx";
//Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App
