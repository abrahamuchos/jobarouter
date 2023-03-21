import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs.jsx";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jabarouter</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='help'> Help</NavLink>
          <NavLink to='careers'>Careers</NavLink>
        </nav>
      </header>
      <main>
        <Breadcrumbs/>
        <Outlet />
      </main>
    </div>
  );
}