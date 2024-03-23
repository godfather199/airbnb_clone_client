import {LoggedInItems, LoggedOutItems} from '../../'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { useSelector } from 'react-redux';




export default function UserModal() {  
  const [anchorEl, setAnchorEl] = useState(null);

  const {current_User} = useSelector(state => state.user)
  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className='border border-gray-500  w-[5rem] h-[3rem] sm:w-[6rem] flex items-center justify-center sm:p-2 rounded-full shadow-lg'>
      <div className="" onClick={handleClick}>
        <MenuIcon />
        <AccountCircleIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        // open={true}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {!current_User ? (
          <LoggedInItems
            handleClose={handleClose}
          />
        ) : (
          <LoggedOutItems
            handleClose={handleClose}
          />
        )}
      </Menu>
    </div>
  );
}
