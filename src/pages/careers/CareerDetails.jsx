/**
 * @typedef  CareerObject
 * @type {object}
 * @property {number} id
 * @property {string} title
 * @property {number} salary
 * @property {string} location
 */
import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  /**
   *
   * @type {CareerObject}
   */
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career details for: {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita magni quia sint voluptas! Cumque ex illo
          inventore mollitia quasi quisquam quo temporibus voluptatum. Aliquid aperiam at cum impedit nam neque.</p>
      </div>
    </div>
  );
}

// loader function
export const careerDetailsLoader = async ({params}) => {
  const {id} = params;
  const res = await fetch('http://localhost:4000/careers/' + id);

  return res.json();
}