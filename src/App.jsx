import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import './App.css'

//Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jabarouter</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
