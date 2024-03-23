import MenuItem from "@mui/material/MenuItem";
import MessageIcon from "@mui/icons-material/Message";
import LuggageIcon from "@mui/icons-material/Luggage";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { handle_Logout } from "../../../store/slices/userSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";



function LoggedOutItems({handleClose}) {
  const dispatch = useDispatch()



  const logout_Func = () => {
    dispatch(handle_Logout())
    handleClose()

    toast.success('User logged out successfully', {
      duration: 2000,
      position: 'bottom-center'
    })
  }
  

  return (
    <div>
      <MenuItem
        // style={{ border: "3px solid green", borderRadius: '2rem' }}
        className="w-[15rem] h-[3.5rem]"
        onClick={handleClose}
      >
        <MessageIcon style={{ color: "red" }} />{" "}
        <span className=" ml-[0.7rem]">Messages</span>
      </MenuItem>

      <Link to="/trips">
        <MenuItem
          // style={{ border: "3px solid green" }}
          className="w-[15rem] h-[3.5rem] "
          onClick={handleClose}
        >
          <LuggageIcon style={{ color: "red" }} />{" "}
          <span className="ml-[0.7rem]">Trips</span>
        </MenuItem>
      </Link>

      <Link to="/whishlist">
        <MenuItem
          // style={{ border: "3px solid green" }}
          className="w-[15rem] h-[3.5rem] "
          onClick={handleClose}
        >
          <ReceiptLongIcon style={{ color: "red" }} />{" "}
          <span className="ml-[0.7rem]">Whishlist</span>
        </MenuItem>
      </Link>

      <MenuItem
        // style={{ border: "3px solid green" }}
        className="w-[15rem] h-[3.5rem] "
        onClick={handleClose}
      >
        <SummarizeIcon style={{ color: "red" }} />{" "}
        <span className="ml-[0.7rem]">Manage Listings</span>
      </MenuItem>

      <MenuItem
        // style={{ border: "3px solid green" }}
        className="w-[15rem] h-[3.5rem] "
        onClick={handleClose}
      >
        <PersonSearchIcon style={{ color: "red" }} />{" "}
        <span className="ml-[0.7rem]">Account</span>
      </MenuItem>

      <MenuItem
        // style={{ border: "3px solid green" }}
        className="w-[15rem] h-[3.5rem] "
        onClick={logout_Func}
      >
        <LogoutIcon style={{ color: "red" }} />{" "}
        <span className="ml-[0.7rem]">Logout</span>
      </MenuItem>
    </div>
  );
}

export default LoggedOutItems;
