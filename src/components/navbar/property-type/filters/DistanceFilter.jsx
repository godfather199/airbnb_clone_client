

function DistanceFilter({ distanceFilter, setDistanceFilter }) {
  return (
    <div className="">
      <div className="">
        <span className="">Distance Range</span>
      </div>

      {/* Distance */}
      <div className="border border-gray-300 w-[20rem] flex flex-col p-2">
        <span className="">Distance</span>
        <div className="">
          <input
            type="text"
            value={distanceFilter}
            onChange={e => setDistanceFilter(e.target.value)}
            className=" outline-none border-none"
          />
          <span className="">kilometers away</span>
        </div>
      </div>
    </div>
  );
}

export default DistanceFilter