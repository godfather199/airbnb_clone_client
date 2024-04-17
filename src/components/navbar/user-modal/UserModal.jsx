import {LoggedInItems, LoggedOutItems} from '../../'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from "@mui/material/Menu";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { reset_User_State } from '../../../store/slices/userSlice';




export default function UserModal() {  
  const dispatch = useDispatch()
  
  // LoggedInItems
  const [openLogin, setOpenLogin] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);


  const { current_User, is_Loading, is_Success } = useSelector(
    (state) => state.user
  );
  
  const open = Boolean(anchorEl);


   // User login successfull
  //  LoginModal
  useEffect(() => {
    if (is_Success) {
      setTimeout(() => {
        handle_Login_Close();
        // reset();
        dispatch(reset_User_State());
      }, 3000);
    }
  }, [is_Success]);
    



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };



  // LoggedInItems
  const handle_Login_Open = (e) => {
    // e.stopPropagation()
    setOpenLogin(true);
  };
  
  
  
  // LoggedInItems
  const handle_Login_Close = () => {
    setOpenLogin(false);
    handleClose();
  };



  return (
    <div className="border border-gray-500  w-[5rem] h-[3rem] sm:w-[6rem] flex items-center justify-center sm:p-2 rounded-full shadow-lg">
      <div
        className="flex items-center justify-center gap-2"
        onClick={handleClick}
      >
        <MenuIcon />
        {current_User?.user_Avatar?.url ? (
          <img
            src={current_User?.user_Avatar?.url}
            alt=""
            className="w-[2rem] h-[2rem] object-cover rounded-full"
          />
        ) : (
          <AccountCircleIcon />
        )}
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
            openLogin={openLogin}
            handle_Login_Open = {handle_Login_Open}
            handle_Login_Close = {handle_Login_Close}
            is_Loading = {is_Loading}
          />
        ) : (
          <LoggedOutItems handleClose={handleClose} />
        )}
      </Menu>
    </div>
  );
}
