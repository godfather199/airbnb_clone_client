

function DistanceFilter({ distanceFilter, setDistanceFilter }) {
  return (
    <div  className="flex flex-col gap-4">
      <div className="">
        <span className="text-xl font-semibold text-gray-600">
          Distance Range
        </span>
      </div>

      {/* Distance */}
      <div className="border border-gray-600 w-[20rem] md:w-[25rem]  lg:w-[20rem] flex flex-col justify-center gap-1 p-2 rounded-[5px] ml-4 md:ml-[3.3rem] lg:ml-[1.5rem] shadow-lg">
        <span className="text-sm text-gray-400">Distance</span>
        <div
          // style={{ border: "3px solid red" }}
          className=" w-[13rem] flex items-center"
        >
          <input
            // style={{ border: "3px solid purple" }}
            type="text"
            value={distanceFilter}
            onChange={(e) => setDistanceFilter(e.target.value)}
            className=" w-[5rem] outline-none border-none"
          />
          <span className="text-sm text-gray-400">kilometers away</span>
        </div>
      </div>
    </div>
  );
}

export default DistanceFilter