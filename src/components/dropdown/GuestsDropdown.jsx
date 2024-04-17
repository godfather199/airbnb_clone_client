import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const guest_Options = [
  {
    title: 'Adults',
    subtitle: 'Age 13+'
  },
  {
    title: 'Children',
    subtitle: 'Age 2-12'
  },
]



export default function GuestsDropdown({
  adultGuests,
  setAdultGuests,
  childrenGuests,
  setChildrenGuests,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const [arrow, setArrow] = useState(false);

  const handle_Arrow_Direction = () => {
    setArrow(!arrow);
  };

  const handle_Adult_Guests = (type) => {
    if (type === "decrement") {
      setAdultGuests((prev) => (prev > 1 ? prev - 1 : 1));
    } else {
      setAdultGuests((prev) => prev + 1);
    }
  };

  const handle_Children_Guests = (type) => {
    if (type === "decrement") {
      setChildrenGuests((prev) => (prev > 0 ? prev - 1 : 0));
    } else {
      setChildrenGuests((prev) => prev + 1);
    }
  };

  const handle_Menu_Click = (event) => {
    setAnchorEl(event.currentTarget);
    handle_Arrow_Direction();
  };

  const handle_Menu_Close = () => {
    setAnchorEl(null);
    handle_Arrow_Direction();
  };

  return (
    <div>
      <div
        // style={{ border: "3px solid red" }}
        className="border border-gray-700 flex justify-between cursor-pointer rounded-[7px] w-[89.5%] "
        onClick={handle_Menu_Click}
      >
        <div className="flex flex-col p-3 ml-6">
          <span className="text-xs font-semibold text-gray-700">GUESTS</span>
          <span className="text-md  text-gray-600">{`${
            adultGuests + childrenGuests
          } guests`}</span>
        </div>
        <span className=" flex items-center">
          {arrow ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </span>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handle_Menu_Close}
        disableScrollLock={true}
        PaperProps={{
          style: {
            padding: "0.9rem",
            borderRadius: "0.8rem",
          },
        }}
      >
        {guest_Options.map(({ title, subtitle }) => (
          <MenuItem
            key={title}
            style={{ backgroundColor: "transparent" }}
            className="w-[18rem]"
            disableRipple
          >
            <div
              // style={{ border: "3px solid red" }}
              className="w-full flex justify-between items-center mb-5 "
            >
              {/* Guest Type */}
              <div className="flex flex-col gap-1">
                <span className="text-md font-semibold text-black">
                  {title}
                </span>
                <span className="text-sm font-light text-gray-500">
                  {subtitle}
                </span>
              </div>

              {/* Buttons */}
              <div
                // style={{ border: "3px solid purple" }}
                className={`w-[6.5rem] flex items-center justify-between`}
              >
                <RemoveIcon
                  style={{
                    border: "1px solid grey",
                    borderRadius: "2rem",
                    fontSize: "2rem",
                    padding: "3px",
                    color: "gray",
                  }}
                  className={`${
                    (title === "Adults" && adultGuests === 1) ||
                    (title === "Children" && childrenGuests === 0)
                      ? " cursor-not-allowed"
                      : " cursor-pointer"
                  }`}
                  onClick={
                    title === "Adults"
                      ? () => handle_Adult_Guests("decrement")
                      : () => handle_Children_Guests("decrement")
                  }
                />
                {title === "Adults" ? (
                  <span className="text-lg ">{adultGuests}</span>
                ) : (
                  <span className="">{childrenGuests}</span>
                )}
                <AddIcon
                  onClick={
                    title === "Adults"
                      ? () => handle_Adult_Guests("increment")
                      : () => handle_Children_Guests("increment")
                  }
                  style={{
                    border: "1px solid grey",
                    borderRadius: "2rem",
                    fontSize: "2rem",
                    padding: "3px",
                    color: "gray",
                  }}
                />
              </div>
            </div>
          </MenuItem>
        ))}

        {/* Close button */}
        <div
          // style={{ border: "3px solid red" }}
          className="flex justify-end "
        >
          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "black",
              opacity: 0.9,
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "13px",
              marginLeft: "2rem",
            }}
            className=""
            onClick={handle_Menu_Close}
          >
            Close
          </Button>
        </div>
      </Menu>
    </div>
  );
}