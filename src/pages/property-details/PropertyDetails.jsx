import {
  PriceCalculator,
  PropertyMainDetails,
  PropertyFeatures,
  PropertySubDetails,
  PhotoGallery,
  HostDetails,
  HostImage,
} from "../";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  property_Details,
  reset_Property_Details,
} from "../../store/slices/propertySlice";

function PropertyDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { property } = useSelector((state) => state.property);

  // console.log("Details: ", property);

  // Property details
  useEffect(() => {
    dispatch(property_Details({ propertyId: id }));

    return () => dispatch(reset_Property_Details());
  }, [id]);


  return (
    <div
      // style={{ border: "3px solid green" }}
      className="w-[30rem] sm:w-[38rem] md:w-[47rem] lg:w-[57rem] xl:w-[70rem] "
    >
      {/* Location title */}
      <div
        // style={{ border: "3px solid red" }}
        className="text-2xl font-semibold text-gray-600 my-5 ml-4 text-center lg:text-start"
      >
        <span className="">{property?.title}</span>
      </div>

      {/* Photo Gallery */}
      <div className="">
        <PhotoGallery propertyPhotos={property?.property_Images} />
      </div>

      {/* Property details */}
      <div className="flex flex-col lg:flex-row relative">
        <div className="">
          {/* Location sub-details */}
          <div style={{ border: "3px solid red" }} className="ml-3">
            <PropertySubDetails subDetails={property?.subtitle} />
          </div>

          <div className="border border-gray-300  w-[90%] my-5 ml-3" />

          {/* Host name & image */}
          <div className="ml-2">
            <HostImage
              hostName={property?.owner?.name}
              hostImage={property?.owner?.user_Avatar?.url}
            />
          </div>

          <div className="border border-gray-300  w-[90%] my-5 ml-3" />

          {/* Property main details */}
          <div className="ml-3">
            <PropertyMainDetails />
          </div>

          <div className="border border-gray-300  w-[90%] my-5 ml-3" />

          {/* Host details */}
          <div className="ml-3">
            <HostDetails details={property?.owner} />
          </div>

          <div className="border border-gray-300  w-[95%] my-[2rem] ml-3" />

          {/* Property Features */}
          <div className="">
            <PropertyFeatures />
          </div>
        </div>

        {/* Price Calculator */}
        <div className=" lg:sticky lg:top-[7rem] lg:self-start  lg:mt-2">
          <PriceCalculator cost={property?.price} />
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;


