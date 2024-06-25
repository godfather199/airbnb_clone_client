import MenuItem from "@mui/material/MenuItem";
import MessageIcon from "@mui/icons-material/Message";
import LuggageIcon from "@mui/icons-material/Luggage";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { thunk_Logout_User } from "../../../store/thunks/userThunk";
import { reset_All_Properties } from "../../../store/slices/propertySlice";
import { reset_Bookings_State } from "../../../store/slices/bookingSlice";



function LoggedOutItems({handleClose}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {is_Success} = useSelector(state => state.user)

  const logout_Func = () => {
    dispatch(thunk_Logout_User())
    dispatch(reset_All_Properties())
    dispatch(reset_Bookings_State())
    handleClose()
    navigate('/')
  }
  

  return (
    <div>
      {/* <MenuItem
        // style={{ border: "3px solid green", borderRadius: '2rem' }}
        className="w-[15rem] h-[3.5rem]"
        onClick={handleClose}
      >
        <MessageIcon style={{ color: "red" }} />{" "}
        <span className=" ml-[0.7rem]">Messages</span>
      </MenuItem> */}

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

      <Link to="/hosting">
        <MenuItem
          // style={{ border: "3px solid green" }}
          className="w-[15rem] h-[3.5rem] "
          onClick={handleClose}
        >
          <SummarizeIcon style={{ color: "red" }} />{" "}
          <span className="ml-[0.7rem]">Manage Listings</span>
        </MenuItem>
      </Link>

      <Link to="/account">
        <MenuItem
          // style={{ border: "3px solid green" }}
          className="w-[15rem] h-[3.5rem] "
          onClick={handleClose}
        >
          <PersonSearchIcon style={{ color: "red" }} />{" "}
          <span className="ml-[0.7rem]">Account</span>
        </MenuItem>
      </Link>

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
