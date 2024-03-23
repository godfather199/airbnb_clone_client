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
      <button className="" onClick={handle_Filter_Open}>
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
      >
        <div
          style={{ border: "3px solid red" }}
          className="w-[50rem] h-[50rem]"
        >
          {/* Heading */}
          <div style={{ border: "3px solid purple" }} className="">
            <CloseIcon
              onClick={handle_Filter_Close}
              style={{ cursor: "pointer" }}
            />
            <span className="">Filters</span>
          </div>

          {/* Price Filter */}
          <div className="">
            <PriceFilter
              priceFilter={priceFilter}
              handle_Price_Filter={handle_Price_Filter}
            />
          </div>

          {/* Distance Filter */}
          <div className="">
            <DistanceFilter
              distanceFilter={distanceFilter}
              setDistanceFilter={setDistanceFilter}
            />
          </div>

          {/* Footer */}
          <div className="">
            <button className="" onClick={handle_Clear_All}>
              Clear All
            </button>
            <button className="" onClick={handle_Filters}>
              Show Properties
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
