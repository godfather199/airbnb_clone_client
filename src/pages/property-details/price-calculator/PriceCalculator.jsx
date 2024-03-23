import {BookingAmount, CheckInOut} from '../../'
import {GuestsDropdown} from '../../../components'
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




function PriceCalculator({cost}) {
  const navigate = useNavigate()

  const {property} = useSelector(state => state.property)
  const {current_User} = useSelector(state => state.user)
  console.log('Current user: ', current_User)
  console.log('Property: ', property)

  const [dateRange, setDateRange] = useState([null, null]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [adultGuests, setAdultGuests] = useState(1);
  const [childrenGuests, setChildrenGuests] = useState(0);
  const [userIsOwner, setUserIsOwner] = useState(false)


  // Check if the logged in user is the owner of the proeprty
  useEffect(() => {
    setUserIsOwner(current_User?._id === property?.owner?._id)
  }, [property, current_User])


  const handle_Open_Calendar = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handle_Close_Calendar = () => {
    setAnchorEl(null);
  };


  const handle_Checkout_Page = () => {
    axios
      .post(`/api/booking/create-checkout-session`, {
        current_Property: property,
        booking_Dates: dateRange,
        adultGuests,
        childrenGuests
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };


  return (
    <div className="flex flex-col gap-6 p-7 shadow-gray-400 shadow-lg relative">
      {/* Show a message to the owner of the property */}
      {userIsOwner && (
        <div
          // style={{ border: "3px solid red" }}
          className="w-[20.2rem] h-[8rem]  absolute top-20 left-[1.6rem] bg-white"
        >
          <div className=" mt-[2rem]">
            <span className=" text-2xl text-gray-500 font-semibold ">
              This property is listed by you. You're not allowed to book it.
            </span>
          </div>
        </div>
      )}

      {/* Charge per night */}
      <div className="">
        <span className="text-2xl font-bold">
          {`₹${cost?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          <span className="ml-1 text-lg font-light text-gray-700">night</span>
        </span>
      </div>

      <div className="">
        {/* Check-in & Check-out dates */}
        <div className="">
          <CheckInOut
            dateRange={dateRange}
            setDateRange={setDateRange}
            anchorEl={anchorEl}
            handle_Open_Calendar={handle_Open_Calendar}
            handle_Close_Calendar={handle_Close_Calendar}
          />
        </div>

        {/* Dropdown */}
        <div className="">
          <GuestsDropdown
            adultGuests={adultGuests}
            setAdultGuests={setAdultGuests}
            childrenGuests={childrenGuests}
            setChildrenGuests={setChildrenGuests}
          />
        </div>
      </div>

      {/* Button */}
      <div className="">
        {dateRange[0] && dateRange[1] ? (
          <button
            className="w-full bg-red-600 text-white h-[3.9rem] text-2xl font-semibold rounded-[0.7rem] shadow-black"
            onClick={handle_Checkout_Page}
          >
            Reserve
          </button>
        ) : (
          <button
            disabled={userIsOwner}
            className={`w-full ${userIsOwner ? "bg-gray-200" : "bg-red-600"} ${
              userIsOwner ? "cursor-not-allowed" : " cursor-pointer"
            }  text-white h-[3.9rem] text-2xl font-semibold rounded-[0.7rem] shadow-black`}
            onClick={handle_Open_Calendar}
          >
            Check Availability
          </button>
        )}
      </div>

      {/* Final Booking Price */}
      <div className="">
        {dateRange[0] && dateRange[1] && (
          <BookingAmount dateRange={dateRange} cost={cost} />
        )}
      </div>
    </div>
  );
}
export default PriceCalculator