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
    <div className="">
      {/* Location title */}
      <div className="">
        <span className="">{property?.title}</span>
      </div>

      {/* Photo Gallery */}
      <div className="">
        <PhotoGallery propertyPhotos={property?.property_Images} />
      </div>

      {/* Property details */}
      <div className="flex">
        <div className="">
          {/* Location sub-details */}
          <div className="">
            <PropertySubDetails subDetails={property?.subtitle} />
          </div>

          <div className="border border-gray-300  w-[15rem] my-5" />

          {/* Host name & image */}
          <div className="">
            <HostImage
              hostName={property?.owner?.name}
              hostImage={property?.owner?.userAvatar?.url}
            />
          </div>

          <div className="border border-gray-300  w-[15rem] my-5" />

          {/* Property main details */}
          <div className="">
            <PropertyMainDetails />
          </div>

          {/* Host details */}
          <div className="">
            <HostDetails details={property?.owner} />
          </div>

          {/* Property Features */}
          <div className="">
            <PropertyFeatures />
          </div>
        </div>

        {/* Price Calculator */}
        <div  className=" ">
          <PriceCalculator cost = {property?.price} />
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;


