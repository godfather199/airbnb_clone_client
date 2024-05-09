import {Property, SkeletonProperty} from '../../components'
import {TripsSort, TripBookingDetails} from '../'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { thunk_Booked_Properties } from '../../store/thunks/bookingThunk'
import { reset_Booking_Success_State } from '../../store/slices/bookingSlice'
import { isAfter, isBefore, parse } from 'date-fns'
import { useSortTrips } from '../../hooks/useSortTrips'

// const bookings = [
//   {
//     guests: {
//       adults: "2",
//       children: "1",
//     },
//     _id: "65f803c4a04f7177038a8ab5",
//     propertyId: {
//       _id: "65a79302e2bafee976815a67",
//       title: "TripThrill Matthuga - East Bungalow Homestay-7",
//       subtitle: ["3 guests, 1 bedroom, 1 bed, 1 private bathroom"],
//       property_Images: [
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/pduxuiwdhrmsmatb1vdv.webp",
//           _id: "65a79302e2bafee976815a68",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/ew5gdxgebap63q2nusgp.webp",
//           _id: "65a79302e2bafee976815a69",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/cfltc7agx1ni1fxhucfe.webp",
//           _id: "65a79302e2bafee976815a6a",
//         },
//       ],
//       owner: {
//         _id: "65a790bfe69e8c1140bd2f57",
//         name: "Messi Singh",
//         email: "messi@gmail.com",
//         about: [],
//         properties: ["65a79302e2bafee976815a67", "65a7e3ab7fde3d7412376468"],
//         trips: [],
//         whishlist: ["65a10f48fa4bce73efab321f"],
//         createdAt: "2024-01-17T08:33:03.855Z",
//         updatedAt: "2024-04-13T01:58:41.108Z",
//         __v: 4,
//       },
//       location: "Jog Falls, India",
//       category: "Historical Homes",
//       distance: 1617,
//       price: 4000,
//       createdAt: "2024-01-17T08:42:42.304Z",
//       updatedAt: "2024-01-17T08:42:42.304Z",
//       __v: 0,
//     },
//     customerId: "659a51451b67c886efd46d98",
//     checkIn: "25/04/2024",
//     checkOut: "30/04/2024",
//     totalPrice: "25200",
//     createdAt: "2024-03-18T09:05:08.748Z",
//     updatedAt: "2024-03-18T09:05:08.748Z",
//     __v: 0,
//   },
//   {
//     guests: {
//       adults: "2",
//       children: "1",
//     },
//     _id: "65f803c4a04f7177038a8ab5",
//     propertyId: {
//       _id: "65a79302e2bafee976815a67",
//       title: "TripThrill Matthuga - East Bungalow Homestay-7",
//       subtitle: ["3 guests, 1 bedroom, 1 bed, 1 private bathroom"],
//       property_Images: [
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/pduxuiwdhrmsmatb1vdv.webp",
//           _id: "65a79302e2bafee976815a68",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/ew5gdxgebap63q2nusgp.webp",
//           _id: "65a79302e2bafee976815a69",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/cfltc7agx1ni1fxhucfe.webp",
//           _id: "65a79302e2bafee976815a6a",
//         },
//       ],
//       owner: {
//         _id: "65a790bfe69e8c1140bd2f57",
//         name: "Messi Singh",
//         email: "messi@gmail.com",
//         about: [],
//         properties: ["65a79302e2bafee976815a67", "65a7e3ab7fde3d7412376468"],
//         trips: [],
//         whishlist: ["65a10f48fa4bce73efab321f"],
//         createdAt: "2024-01-17T08:33:03.855Z",
//         updatedAt: "2024-04-13T01:58:41.108Z",
//         __v: 4,
//       },
//       location: "Jog Falls, India",
//       category: "Historical Homes",
//       distance: 1617,
//       price: 4000,
//       createdAt: "2024-01-17T08:42:42.304Z",
//       updatedAt: "2024-01-17T08:42:42.304Z",
//       __v: 0,
//     },
//     customerId: "659a51451b67c886efd46d98",
//     checkIn: "30/06/2024",
//     checkOut: "04/06/2024",
//     totalPrice: "25200",
//     createdAt: "2024-03-18T09:05:08.748Z",
//     updatedAt: "2024-03-18T09:05:08.748Z",
//     __v: 0,
//   },
//   {
//     guests: {
//       adults: "2",
//       children: "1",
//     },
//     _id: "65f803c4a04f7177038a8ab5",
//     propertyId: {
//       _id: "65a79302e2bafee976815a67",
//       title: "TripThrill Matthuga - East Bungalow Homestay-7",
//       subtitle: ["3 guests, 1 bedroom, 1 bed, 1 private bathroom"],
//       property_Images: [
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/pduxuiwdhrmsmatb1vdv.webp",
//           _id: "65a79302e2bafee976815a68",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/ew5gdxgebap63q2nusgp.webp",
//           _id: "65a79302e2bafee976815a69",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/cfltc7agx1ni1fxhucfe.webp",
//           _id: "65a79302e2bafee976815a6a",
//         },
//       ],
//       owner: {
//         _id: "65a790bfe69e8c1140bd2f57",
//         name: "Messi Singh",
//         email: "messi@gmail.com",
//         about: [],
//         properties: ["65a79302e2bafee976815a67", "65a7e3ab7fde3d7412376468"],
//         trips: [],
//         whishlist: ["65a10f48fa4bce73efab321f"],
//         createdAt: "2024-01-17T08:33:03.855Z",
//         updatedAt: "2024-04-13T01:58:41.108Z",
//         __v: 4,
//       },
//       location: "Jog Falls, India",
//       category: "Historical Homes",
//       distance: 1617,
//       price: 4000,
//       createdAt: "2024-01-17T08:42:42.304Z",
//       updatedAt: "2024-01-17T08:42:42.304Z",
//       __v: 0,
//     },
//     customerId: "659a51451b67c886efd46d98",
//     checkIn: "30/06/2024",
//     checkOut: "04/06/2024",
//     totalPrice: "25200",
//     createdAt: "2024-03-18T09:05:08.748Z",
//     updatedAt: "2024-03-18T09:05:08.748Z",
//     __v: 0,
//   },
//   {
//     guests: {
//       adults: "2",
//       children: "1",
//     },
//     _id: "65f803c4a04f7177038a8ab5",
//     propertyId: {
//       _id: "65a79302e2bafee976815a67",
//       title: "TripThrill Matthuga - East Bungalow Homestay-7",
//       subtitle: ["3 guests, 1 bedroom, 1 bed, 1 private bathroom"],
//       property_Images: [
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/pduxuiwdhrmsmatb1vdv.webp",
//           _id: "65a79302e2bafee976815a68",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/ew5gdxgebap63q2nusgp.webp",
//           _id: "65a79302e2bafee976815a69",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/cfltc7agx1ni1fxhucfe.webp",
//           _id: "65a79302e2bafee976815a6a",
//         },
//       ],
//       owner: {
//         _id: "65a790bfe69e8c1140bd2f57",
//         name: "Messi Singh",
//         email: "messi@gmail.com",
//         about: [],
//         properties: ["65a79302e2bafee976815a67", "65a7e3ab7fde3d7412376468"],
//         trips: [],
//         whishlist: ["65a10f48fa4bce73efab321f"],
//         createdAt: "2024-01-17T08:33:03.855Z",
//         updatedAt: "2024-04-13T01:58:41.108Z",
//         __v: 4,
//       },
//       location: "Jog Falls, India",
//       category: "Historical Homes",
//       distance: 1617,
//       price: 4000,
//       createdAt: "2024-01-17T08:42:42.304Z",
//       updatedAt: "2024-01-17T08:42:42.304Z",
//       __v: 0,
//     },
//     customerId: "659a51451b67c886efd46d98",
//     checkIn: "30/06/2024",
//     checkOut: "04/06/2024",
//     totalPrice: "25200",
//     createdAt: "2024-03-18T09:05:08.748Z",
//     updatedAt: "2024-03-18T09:05:08.748Z",
//     __v: 0,
//   },
//   {
//     guests: {
//       adults: "2",
//       children: "1",
//     },
//     _id: "65f803c4a04f7177038a8ab5",
//     propertyId: {
//       _id: "65a79302e2bafee976815a67",
//       title: "TripThrill Matthuga - East Bungalow Homestay-7",
//       subtitle: ["3 guests, 1 bedroom, 1 bed, 1 private bathroom"],
//       property_Images: [
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/pduxuiwdhrmsmatb1vdv.webp",
//           _id: "65a79302e2bafee976815a68",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/ew5gdxgebap63q2nusgp.webp",
//           _id: "65a79302e2bafee976815a69",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/cfltc7agx1ni1fxhucfe.webp",
//           _id: "65a79302e2bafee976815a6a",
//         },
//       ],
//       owner: {
//         _id: "65a790bfe69e8c1140bd2f57",
//         name: "Messi Singh",
//         email: "messi@gmail.com",
//         about: [],
//         properties: ["65a79302e2bafee976815a67", "65a7e3ab7fde3d7412376468"],
//         trips: [],
//         whishlist: ["65a10f48fa4bce73efab321f"],
//         createdAt: "2024-01-17T08:33:03.855Z",
//         updatedAt: "2024-04-13T01:58:41.108Z",
//         __v: 4,
//       },
//       location: "Jog Falls, India",
//       category: "Historical Homes",
//       distance: 1617,
//       price: 4000,
//       createdAt: "2024-01-17T08:42:42.304Z",
//       updatedAt: "2024-01-17T08:42:42.304Z",
//       __v: 0,
//     },
//     customerId: "659a51451b67c886efd46d98",
//     checkIn: "30/06/2024",
//     checkOut: "04/06/2024",
//     totalPrice: "25200",
//     createdAt: "2024-03-18T09:05:08.748Z",
//     updatedAt: "2024-03-18T09:05:08.748Z",
//     __v: 0,
//   },
//   {
//     guests: {
//       adults: "2",
//       children: "1",
//     },
//     _id: "65f803c4a04f7177038a8ab5",
//     propertyId: {
//       _id: "65a79302e2bafee976815a67",
//       title: "TripThrill Matthuga - East Bungalow Homestay-7",
//       subtitle: ["3 guests, 1 bedroom, 1 bed, 1 private bathroom"],
//       property_Images: [
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/pduxuiwdhrmsmatb1vdv.webp",
//           _id: "65a79302e2bafee976815a68",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/ew5gdxgebap63q2nusgp.webp",
//           _id: "65a79302e2bafee976815a69",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/cfltc7agx1ni1fxhucfe.webp",
//           _id: "65a79302e2bafee976815a6a",
//         },
//       ],
//       owner: {
//         _id: "65a790bfe69e8c1140bd2f57",
//         name: "Messi Singh",
//         email: "messi@gmail.com",
//         about: [],
//         properties: ["65a79302e2bafee976815a67", "65a7e3ab7fde3d7412376468"],
//         trips: [],
//         whishlist: ["65a10f48fa4bce73efab321f"],
//         createdAt: "2024-01-17T08:33:03.855Z",
//         updatedAt: "2024-04-13T01:58:41.108Z",
//         __v: 4,
//       },
//       location: "Jog Falls, India",
//       category: "Historical Homes",
//       distance: 1617,
//       price: 4000,
//       createdAt: "2024-01-17T08:42:42.304Z",
//       updatedAt: "2024-01-17T08:42:42.304Z",
//       __v: 0,
//     },
//     customerId: "659a51451b67c886efd46d98",
//     checkIn: "30/06/2024",
//     checkOut: "04/06/2024",
//     totalPrice: "25200",
//     createdAt: "2024-03-18T09:05:08.748Z",
//     updatedAt: "2024-03-18T09:05:08.748Z",
//     __v: 0,
//   },
//   {
//     guests: {
//       adults: "2",
//       children: "1",
//     },
//     _id: "65f803c4a04f7177038a8ab5",
//     propertyId: {
//       _id: "65a79302e2bafee976815a67",
//       title: "TripThrill Matthuga - East Bungalow Homestay-7",
//       subtitle: ["3 guests, 1 bedroom, 1 bed, 1 private bathroom"],
//       property_Images: [
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/pduxuiwdhrmsmatb1vdv.webp",
//           _id: "65a79302e2bafee976815a68",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/ew5gdxgebap63q2nusgp.webp",
//           _id: "65a79302e2bafee976815a69",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/cfltc7agx1ni1fxhucfe.webp",
//           _id: "65a79302e2bafee976815a6a",
//         },
//       ],
//       owner: {
//         _id: "65a790bfe69e8c1140bd2f57",
//         name: "Messi Singh",
//         email: "messi@gmail.com",
//         about: [],
//         properties: ["65a79302e2bafee976815a67", "65a7e3ab7fde3d7412376468"],
//         trips: [],
//         whishlist: ["65a10f48fa4bce73efab321f"],
//         createdAt: "2024-01-17T08:33:03.855Z",
//         updatedAt: "2024-04-13T01:58:41.108Z",
//         __v: 4,
//       },
//       location: "Jog Falls, India",
//       category: "Historical Homes",
//       distance: 1617,
//       price: 4000,
//       createdAt: "2024-01-17T08:42:42.304Z",
//       updatedAt: "2024-01-17T08:42:42.304Z",
//       __v: 0,
//     },
//     customerId: "659a51451b67c886efd46d98",
//     checkIn: "30/03/2024",
//     checkOut: "04/04/2024",
//     totalPrice: "25200",
//     createdAt: "2024-03-18T09:05:08.748Z",
//     updatedAt: "2024-03-18T09:05:08.748Z",
//     __v: 0,
//   },
//   {
//     guests: {
//       adults: "2",
//       children: "1",
//     },
//     _id: "65f803c4a04f7177038a8ab5",
//     propertyId: {
//       _id: "65a79302e2bafee976815a67",
//       title: "TripThrill Matthuga - East Bungalow Homestay-7",
//       subtitle: ["3 guests, 1 bedroom, 1 bed, 1 private bathroom"],
//       property_Images: [
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/pduxuiwdhrmsmatb1vdv.webp",
//           _id: "65a79302e2bafee976815a68",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/ew5gdxgebap63q2nusgp.webp",
//           _id: "65a79302e2bafee976815a69",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/cfltc7agx1ni1fxhucfe.webp",
//           _id: "65a79302e2bafee976815a6a",
//         },
//       ],
//       owner: {
//         _id: "65a790bfe69e8c1140bd2f57",
//         name: "Messi Singh",
//         email: "messi@gmail.com",
//         about: [],
//         properties: ["65a79302e2bafee976815a67", "65a7e3ab7fde3d7412376468"],
//         trips: [],
//         whishlist: ["65a10f48fa4bce73efab321f"],
//         createdAt: "2024-01-17T08:33:03.855Z",
//         updatedAt: "2024-04-13T01:58:41.108Z",
//         __v: 4,
//       },
//       location: "Jog Falls, India",
//       category: "Historical Homes",
//       distance: 1617,
//       price: 4000,
//       createdAt: "2024-01-17T08:42:42.304Z",
//       updatedAt: "2024-01-17T08:42:42.304Z",
//       __v: 0,
//     },
//     customerId: "659a51451b67c886efd46d98",
//     checkIn: "30/03/2024",
//     checkOut: "04/04/2024",
//     totalPrice: "25200",
//     createdAt: "2024-03-18T09:05:08.748Z",
//     updatedAt: "2024-03-18T09:05:08.748Z",
//     __v: 0,
//   },
//   {
//     guests: {
//       adults: "2",
//       children: "1",
//     },
//     _id: "65f803c4a04f7177038a8ab5",
//     propertyId: {
//       _id: "65a79302e2bafee976815a67",
//       title: "TripThrill Matthuga - East Bungalow Homestay-7",
//       subtitle: ["3 guests, 1 bedroom, 1 bed, 1 private bathroom"],
//       property_Images: [
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/pduxuiwdhrmsmatb1vdv.webp",
//           _id: "65a79302e2bafee976815a68",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/ew5gdxgebap63q2nusgp.webp",
//           _id: "65a79302e2bafee976815a69",
//         },
//         {
//           url: "https://res.cloudinary.com/dbhxlg7wx/image/upload/v1705480960/Airbnb_Property_Images/cfltc7agx1ni1fxhucfe.webp",
//           _id: "65a79302e2bafee976815a6a",
//         },
//       ],
//       owner: {
//         _id: "65a790bfe69e8c1140bd2f57",
//         name: "Messi Singh",
//         email: "messi@gmail.com",
//         about: [],
//         properties: ["65a79302e2bafee976815a67", "65a7e3ab7fde3d7412376468"],
//         trips: [],
//         whishlist: ["65a10f48fa4bce73efab321f"],
//         createdAt: "2024-01-17T08:33:03.855Z",
//         updatedAt: "2024-04-13T01:58:41.108Z",
//         __v: 4,
//       },
//       location: "Jog Falls, India",
//       category: "Historical Homes",
//       distance: 1617,
//       price: 4000,
//       createdAt: "2024-01-17T08:42:42.304Z",
//       updatedAt: "2024-01-17T08:42:42.304Z",
//       __v: 0,
//     },
//     customerId: "659a51451b67c886efd46d98",
//     checkIn: "30/03/2024",
//     checkOut: "04/04/2024",
//     totalPrice: "25200",
//     createdAt: "2024-03-18T09:05:08.748Z",
//     updatedAt: "2024-03-18T09:05:08.748Z",
//     __v: 0,
//   },
// ];


function Trips() {
  const dispatch = useDispatch();

  const {bookings, isLoading, isSuccess} = useSelector(state => state.booking)
  // const { isLoading } = useSelector((state) => state.booking);
  // console.log('Bookings: ', bookings)
  // const [isSuccess, setIsSuccess] = useState(false);

  // Fetch logged-in users bookings
  useEffect(() => {
    dispatch(thunk_Booked_Properties());

    // setTimeout(() => {
    //   setIsSuccess(true);
    // }, 1000);
  }, []);

  // Sort out the trips according to dates
  const { ongoingTrips, previousTrips, upcomingTrips } = useSortTrips(
    isSuccess,
    bookings
  );

  return (
    <div className="">
      {isLoading ? (
        // Loading indicator
        Array(5)
          .fill("")
          .map((item, idx) => <SkeletonProperty key={idx} />)
      ) : (
        // Trip details
        <div className="flex gap-5">
          <TripsSort
            ongoingTrips={ongoingTrips}
            upcomingTrips={upcomingTrips}
            previousTrips={previousTrips}
          />
        </div>
      )}
    </div>
  );
}

export default Trips

