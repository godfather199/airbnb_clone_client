import {Filter} from '../../'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunk_Fetch_All_Properties, thunk_Fetch_Property_By_Category } from "../../../store/thunks/propertyThunk";
import { set_Filter_Flag } from '../../../store/slices/propertySlice';

const categories = [
  {
    title: "All",
    source:
      "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg",
  },
  {
    title: "Rooms",
    source:
      "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
  },
  {
    title: "Cabins",
    source:
      "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
  },
  {
    title: "Historical Homes",
    source:
      "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
  },
  {
    title: "Luxe",
    source:
      "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
  },
  {
    title: "Castles",
    source:
      "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
  }
];


function PropertyType() {
  const dispatch = useDispatch()

  const {filterFlag} = useSelector(state => state.property)

  const [selectedCategory, setSelectedCategory] = useState('All')
  
  
  // Filter by properties
  useEffect(() => {
    if (filterFlag) {
      setSelectedCategory("");
    }

    return () => dispatch(set_Filter_Flag(false));
  }, [filterFlag]);
  

  const handle_Current_Category = (info) => {
    setSelectedCategory(info)

    if(info === 'All') {
      dispatch(thunk_Fetch_All_Properties())
    }
    else {
      dispatch(thunk_Fetch_Property_By_Category(info))
    }
  }



  return (
    <div
      // style={{ border: "3px solid purple" }}
      className="w-full sm:w-[94%] xl:w-[75rem] p-5 flex items-center justify-between md:justify-around"
    >
      {/* Categories */}
      <div
        // style={{ border: "3px solid green" }}
        className="w-[20rem] md:w-[65%] flex justify-between"
      >
        {categories.map(({ title, source }) => (
          <div
            // style={{ border: "3px solid orange" }}
            key={source}
            className={`flex flex-col items-center justify-center hover:bg-gray-200 p-2 ${
              selectedCategory === title ? "bg-gray-200" : null
            } cursor-pointer`}
            onClick={() => handle_Current_Category(title)}
          >
            <img src={source} alt="" className="w-[1.7rem] h-[1.7rem]" />
            <span className="text-sm text-gray-500  font-medium hidden md:block">
              {title}
            </span>
          </div>
        ))}
      </div>

      {/*  Filters */}
      <div className="">
        <Filter />
      </div>
    </div>
  );
}

export default PropertyType

