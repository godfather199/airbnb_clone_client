import { TextField } from "@mui/material";


function PriceFilter({
  priceFilter,
  handle_Price_Filter
}) {
  return (
    <div className="">
      <div className="">
        <span className="">Price Range</span>
      </div>

      <div className="flex gap-4">
        {/* Minimum */}
        <div className="border border-gray-300 w-[20rem] flex flex-col p-2">
          <span className="">Minimum</span>
          <div className="">
            <span className="">₹</span>
            <input
              type="text"
              name="minPriceFilter"
              value={priceFilter.minPriceFilter}
              onChange={handle_Price_Filter}
              className=" outline-none border-none"
            />
          </div>
        </div>

        {/* Maximum */}
        <div className="border border-gray-300 w-[20rem] flex flex-col p-2">
          <span className="">Maximum</span>
          <div className="">
            <span className="">₹</span>
            <input
              type="text"
              name="maxPriceFilter"
              value={priceFilter.maxPriceFilter}
              onChange={handle_Price_Filter}
              className=" outline-none border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceFilter