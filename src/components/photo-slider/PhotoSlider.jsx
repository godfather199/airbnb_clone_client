import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './PhotoSlider.css'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux";
import { thunk_Add_To_Whishlist, thunk_Remove_From_Whishlist } from "../../store/thunks/userThunk";
import toast from "react-hot-toast";



const PhotoSlider = ({slideImages, property_Id}) => {
  const dispatch = useDispatch()
  
  const {current_User} = useSelector(state => state.user)

  const [showButton, setShowButton] = useState(false)
  const [propertyLiked, setPropertyLiked] = useState(false)


  // Check 'whishlist' properties
  useEffect(() => {
    if(current_User?.whishlist?.includes(property_Id)) {
      setPropertyLiked(true)
    }
  }, [current_User])



  const handle_Display_Button = () => {
    setShowButton(true)
  }


  const handle_Hide_Button = () => {
    setShowButton(false)
  }


  const handle_Add_To_Whishlist = () => {
    if(current_User === null) {
      return toast.error("You'r not logged in", {
        duration: 1800,
        position: 'bottom-center'
      })
    }
    setPropertyLiked(true)

    dispatch(thunk_Add_To_Whishlist(property_Id))
  }


  const handle_Remove_From_Whishlist = () => {
    setPropertyLiked(false)

    dispatch(thunk_Remove_From_Whishlist(property_Id))
  }

  
  return (
    <div
      // style={{ border: "3px solid red" }}
      className=" w-[20rem] h-[17rem] rounded-[13px] "
      onMouseEnter={handle_Display_Button}
      onMouseLeave={handle_Hide_Button}
    >
      <Slide
        p
        transitionDuration={300}
        prevArrow={
          <div
            className={`bg-white w-[1.7rem] h-[1.7rem] flex items-center justify-center rounded-full ${
              showButton ? " block" : "hidden"
            } shadow-lg`}
            // onClick = {(e) => e.stopPropagation()}
          >
            <ArrowBackIosIcon
              style={{
                fontSize: "1.1rem",
              }}
            />
          </div>
        }
        nextArrow={
          <div
            className={`bg-white w-[1.7rem] h-[1.7rem] flex items-center justify-center rounded-full ${
              showButton ? " block" : "hidden"
            } shadow-lg`}
            // onClick = {(e) => e.stopPropagation()}
          >
            <ArrowForwardIosIcon
              style={{
                fontSize: "1.1rem",
              }}
            />
          </div>
        }
        autoplay={false}
        cssClass=""
      >
        {slideImages?.map((slideImage, index) => (
          <div className="relative" key={slideImage?.url}>
            {/* Add to whishlist */}
            <div
              onClick={
                propertyLiked
                  ? handle_Remove_From_Whishlist
                  : handle_Add_To_Whishlist
              }
              className=""
            >
              {propertyLiked ? (
                <FavoriteIcon
                  style={{
                    position: "absolute",
                    top: "0.4rem",
                    right: "1rem",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  style={{
                    position: "absolute",
                    top: "0.4rem",
                    right: "1rem",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>

            {/* Image */}
            <Link to={`/property-details/${property_Id}`}>
              <img
                // style={{ border: "3px solid purple" }}
                src={slideImage.url}
                alt=""
                className="w-[20rem] h-[17rem] object-cover rounded-[13px]"
              />
            </Link>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default PhotoSlider;
