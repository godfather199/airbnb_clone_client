

function PropertySubDetails({subDetails}) {
  return (
    <div  className="">
      {subDetails?.map((detail, idx) => (
        <div className="flex flex-col mt-1" key={idx}>
          <span
            className={`${
              idx === 0 ? "text-gray-800 text-xl font-bold" : " text-gray-500 text-md font-medium"
            }`}
          >
            {detail}
          </span>
        </div>
      ))}
    </div>
  );
}

export default PropertySubDetails