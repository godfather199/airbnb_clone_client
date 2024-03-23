import {Properties, PropertyType} from '../../components'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"



function Home() {
  

  
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