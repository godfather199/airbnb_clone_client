import { TextField } from "@mui/material";


function PriceFilter({
  priceFilter,
  handle_Price_Filter
}) {
  return (
    <div
      // style={{ border: "3px solid purple" }}
      className=" flex flex-col gap-5"
    >
      <div className="">
        <span className="text-xl font-semibold text-gray-600">Price Range</span>
      </div>

      <div
        // style={{ border: "3px solid green" }}
        className="flex flex-col lg:flex-row items-center justify-around gap-8 lg:gap-4"
      >
        {/* Minimum */}
        <div className="border border-gray-600 w-[20rem] md:w-[25rem] lg:w-[20rem] flex flex-col p-2 rounded-[7px] shadow-lg">
          <span className="text-sm text-gray-400">Minimum</span>
          <div className="flex items-center">
            <span className="">₹</span>
            <input
              // style={{border: '3px solid red'}}
              type="number"
              name="minPriceFilter"
              value={priceFilter.minPriceFilter}
              onChange={handle_Price_Filter}
              className=" outline-none border-none ml-2 w-[10rem]"
            />
          </div>
        </div>

        {/* Maximum */}
        <div className="border border-gray-600 w-[20rem] md:w-[25rem]  lg:w-[20rem] flex flex-col p-2 rounded-[7px] shadow-lg">
          <span className="text-sm text-gray-400">Maximum</span>
          <div className=" flex items-center">
            <span className="">₹</span>
            <input
              // style={{border: '3px solid red'}}
              type="number"
              name="maxPriceFilter"
              value={priceFilter.maxPriceFilter}
              onChange={handle_Price_Filter}
              className=" outline-none border-none ml-2 w-[10rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceFilter