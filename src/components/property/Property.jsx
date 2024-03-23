import { Link } from 'react-router-dom'
import {PhotoSlider} from '../'



function Property({property}) {
  // console.log("Property details: ", property)
  return (
    <div
      // style={{ border: "3px solid purple" }}
      className="flex flex-col items-center gap-2"
    >
      {/* Photo slider */}
      <div className="">
        <PhotoSlider
          slideImages={property?.property_Images}
          property_Id={property?._id}
        />
      </div>

      <Link to={`/property-details/${property?._id}`}>
        {/* Info */}
        <div
          // style={{ border: "3px solid red" }}
          className="flex flex-col w-[20rem]"
        >
          <span className="font-semibold text-gray-700 text-lg">
            {property.location}
          </span>
          <span className="font-md text-gray-500 text-sm">
            {property.distance}{" "}
            <span className=" text-gray-500">kilometers away</span>
          </span>
          <span className="">
            {`₹${property.price}`} <span className=" text-gray-500">night</span>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Property