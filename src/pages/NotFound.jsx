import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis, deserunt doloribus dolorum earum
        enim est ex fugit harum id illo ipsa minima neque omnis perferendis quod tempora ut veritatis!</p>

      <p>Go to <Link to='/'>Homepage</Link></p>


    </div>
  );
}