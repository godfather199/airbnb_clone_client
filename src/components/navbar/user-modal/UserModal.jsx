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

  // Register modal
  const [openRegister, setOpenRegister] = useState(false)
  // const [registeranchorEl, setRegisterAnchorEl] = useState(null)


  const { is_Loading, current_User, is_Success } = useSelector(
    (state) => state.user
  );
  
  const open = Boolean(anchorEl);
  // const registerOpen = Boolean(registeranchorEl)


   // User login successfull
  //  LoginModal
  useEffect(() => {
    if (is_Success) {
      setTimeout(() => {
        handle_Login_Close();
        // reset();
        dispatch(reset_User_State());
      }, 1700);
    }
  }, [is_Success]);
  

  
  // User register successfull
  useEffect(() => {
    if (is_Success) {
      setTimeout(() => {
        handle_Register_Close();
        // handle_Login_Open()
        // reset();
        dispatch(reset_User_State());
      }, 1700);
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

  
  // Register modal
  const handle_Register_Open = (e) => {
    // e.stopPropagation()
    setOpenRegister(true);
  };
  
  
  
  // Register modal
  const handle_Register_Close = () => {
    setOpenRegister(false)
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
            openRegister = {openRegister}
            handle_Register_Open = {handle_Register_Open}
            handle_Register_Close = {handle_Register_Close}
          />
        ) : (
          <LoggedOutItems handleClose={handleClose} />
        )}
      </Menu>
    </div>
  );
}
