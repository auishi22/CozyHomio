import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
  const { id,estate_title, description, image, price, status } = estate;
  return (
    <div>
      <div className="card w-96 bg-[#EEF5FF] shadow-xl hover:bg-[#B8E1DD] hover:scale-105">
        <figure className="p-2">
          <img src={image} className="rounded-xl h-60" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{estate_title}</h2>
          <p>{description}</p>
          <div className="flex gap-10 text-gray-500">
            <p>Price : {price}</p>
            <p>Status : {status}</p>
          </div>
          <div className="card-actions">
            <Link to={`/estatedetails/${id}`}className="btn bg-[#3A9188] text-white border-0 px-20">
              View Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Estate.propTypes = {
    estate:PropTypes.object,
};

export default Estate;
