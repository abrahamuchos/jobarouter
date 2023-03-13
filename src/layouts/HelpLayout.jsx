import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className='help-layout'>
      <h2>Help Layout</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deleniti doloremque eveniet magnam minima
        pariatur placeat quas quisquam reprehenderit saepe totam, veritatis vero voluptas? Amet earum fuga perspiciatis
        tempore voluptas.</p>

      <nav>
        <NavLink to='faq'>View the FAQ</NavLink>
        <NavLink to='contact'> Contact Us</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
}