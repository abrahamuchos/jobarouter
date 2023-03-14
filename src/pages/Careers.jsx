import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData()
  return (
    <div className='careers'>
      {careers.map(career => (
        <Link to='/' key={career.id}>
          <p>{career.title}</p>
          <p>Base in: {career.location}</p>
        </Link>
        )
      )}
    </div>
  );
}
// Loader function
export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers');

  return res.json();
}