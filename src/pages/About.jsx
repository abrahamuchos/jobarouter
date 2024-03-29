import  { useState } from 'react';
import { Navigate } from "react-router-dom";

export default function About() {
  //Simulamos un auth
  const [user, setUser] = useState('mario');

  if(!user){
    return <Navigate to='/' replace={true}/>
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequuntur dolorem incidunt,
        molestiae nesciunt saepe suscipit vel veritatis voluptate. Beatae inventore iure labore nisi officiis
        perferendis quidem quos unde.</p>
      <p>At consectetur cum, distinctio ex expedita natus nisi, praesentium qui quos,
      repudiandae soluta tenetur ut voluptatibus! Ab dignissimos ea est illo recusandae saepe! Aspernatur aut cupiditate
      est fugiat, obcaecati voluptatem.</p>
      <p>Architecto assumenda doloribus fuga hic illo inventore iure maxime nam,
      neque, nesciunt quod rem similique temporibus vel voluptatum? Blanditiis dolorum, eaque error hic laborum omnis
      vitae? Blanditiis deleniti magnam odit?</p>

      <button onClick={()=> setUser(null)}>Logout</button>
    </div>
  );
}