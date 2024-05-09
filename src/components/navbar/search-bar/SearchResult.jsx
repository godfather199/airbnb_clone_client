import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SearchResult({ searchResult, setSerarchResults, setSearchTerm }) {
  const navigate = useNavigate()
  
  const [currentId, setCurrentId] = useState("");

  const mouse_Hover = (id) => {
    setCurrentId(id);
  };

  const mouse_Leave = () => {
    setCurrentId("");
  };


  const navigate_To_Property_Details = (id) => {
    setSerarchResults([])
    setCurrentId('')
    setSearchTerm('')
    navigate(`/property-details/${id}`)
  }

  return (
    <div
      // style={{ border: "4px solid purple" }}
      className={`w-[20rem] md:w-[30rem] max-h-[32rem] z-50 p-4 ${
        searchResult.length > 0
          ? "overflow-y-scroll border-2 border-gray-400 rounded-lg"
          : ""
      } `}
    >
      {searchResult?.map((result, idx) => (
        // <Link  to={}>
        <div
          key={idx}
          // style={{ border: "3px solid green" }}
          className={`grid grid-cols-2 md:grid-cols-3 gap-2  p-3 ${
            currentId === result?._id ? "bg-gray-400" : "bg-gray-100"
          } cursor-pointer`}
          onMouseEnter={() => mouse_Hover(result?._id)}
          onMouseLeave={mouse_Leave}
          onClick={() => navigate_To_Property_Details(result?._id)}
        >
          {/* Property Image */}
          <div className="w-[4rem] h-[4rem]">
            <img
              src={result?.property_Images[0]?.url}
              alt=""
              className="h-[4rem] w-[4rem] object-cover"
            />
          </div>

          {/* Property city */}
          <div className="hidden md:block">
            <span className=" text-sm text-gray-700 font-semibold">
              {result?.location}
            </span>
          </div>

          {/* Property title */}
          <div className="">
            <span className="text-xs text-gray-700 font-semibold">
              {result?.title}
            </span>
          </div>
        </div>
        // </Link>
      ))}
    </div>
  );
}

export default SearchResult