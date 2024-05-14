import {Properties, PropertyType} from '../../components'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { set_Google_Entry_State } from '../../store/slices/userSlice'
import toast from 'react-hot-toast'



function Home() {
  const dispatch = useDispatch()
  const {google_Entry} = useSelector(state => state.user)
  
  // Reset google oauth state
  useEffect(() => {
    if (google_Entry) {
      toast.success('Logged in successfully', {
        duration: 1500,
        position: "bottom-center",
      });
    }

    setTimeout(() => {
      dispatch(set_Google_Entry_State(false))
    }, 1800);

  }, [])

  
  return (
    <div  className="">
      {/* Navbar */}

      {/* Property Type */}
      <div className="">
        <PropertyType />
      </div>

      {/* Price Filter */}

      {/* Properties */}
      <div className="">
        <Properties />
      </div>
    </div>
  );
}

export default Home