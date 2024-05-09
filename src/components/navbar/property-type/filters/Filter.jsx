import {PriceFilter, DistanceFilter} from '../../../'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef, useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useDispatch } from 'react-redux';
import { thunk_Property_By_Filters } from '../../../../store/thunks/propertyThunk';
import { set_Filter_Flag } from '../../../../store/slices/propertySlice';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





export default function Filters() {
  const dispatch = useDispatch()

  const [openFilter, setOpenFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState({
    minPriceFilter: 0,
    maxPriceFilter: 1000000
  })
  const [distanceFilter, setDistanceFilter] = useState(10000)


  const handle_Price_Filter = (e) => {
    const {name, value} = e.target

    setPriceFilter((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  const handle_Filter_Open = () => {
    setOpenFilter(true);
  };


  const handle_Filter_Close = () => {
    setOpenFilter(false);
  };


  const handle_Clear_All = () => {
    setPriceFilter({
      minPriceFilter: 0,
      maxPriceFilter: 1000000,
    });

    setDistanceFilter(10000)
  };


  const handle_Filters = () => {
    dispatch(thunk_Property_By_Filters({
      minPrice: priceFilter.minPriceFilter,
      maxPrice: priceFilter.maxPriceFilter,
      maxDistance: distanceFilter
    }))

    dispatch(set_Filter_Flag(true))

    setPriceFilter({
      minPriceFilter: 0,
      maxPriceFilter: 1000000
    })

    setDistanceFilter(10000)

    handle_Filter_Close()
  }



  return (
    <>
      <button className="flex items-center justify-center" onClick={handle_Filter_Open}>
        <FilterAltIcon />
        Filters
      </button>
      <Dialog
        // open={true}
        open={openFilter}
        TransitionComponent={Transition}
        keepMounted
        onClose={handle_Filter_Close}
        maxWidth="xl"
        // fullWidth
        PaperProps={{
          sx: {
            borderRadius: "8px",
            height: "32rem",
          },
        }}
      >
        <div
          // style={{ border: "3px solid red" }}
          className="w-[25rem] md:w-[35rem] lg:w-[50rem] h-[50rem] p-5 flex flex-col gap-5"
        >
          {/* Heading */}
          <div
            // style={{ border: "3px solid purple" }}
            className="w-[53%]  flex items-center justify-between"
          >
            <CloseIcon
              onClick={handle_Filter_Close}
              style={{ cursor: "pointer", fontSize: "21px" }}
            />
            <span className=" text-md font-bold text-gray-600 tracking-wide">
              Filters
            </span>
          </div>

          <div className="border border-gray-300  w-[100%] my-1 " />

          {/* Price Filter */}
          <div className="">
            <PriceFilter
              priceFilter={priceFilter}
              handle_Price_Filter={handle_Price_Filter}
            />
          </div>

          <div className="border border-gray-300  w-[100%] my-4 " />

          {/* Distance Filter */}
          <div className="">
            <DistanceFilter
              distanceFilter={distanceFilter}
              setDistanceFilter={setDistanceFilter}
            />
          </div>

          <div className="border border-gray-300  w-[100%] my-2" />

          {/* Footer */}
          <div
            // style={{ border: "3px solid red" }}
            className="flex items-center justify-between"
          >
            <button
              className=" text-md font-semibold text-gray-700"
              onClick={handle_Clear_All}
            >
              Clear all
            </button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ backgroundColor: "black", color: "white" }}
              className=""
              onClick={handle_Filters}
            >
              Show Properties
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
