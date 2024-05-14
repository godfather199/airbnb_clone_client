import GoogleIcon from "@mui/icons-material/Google";
import { backend_URL } from "../../App";
import axios from "axios";
import { useDispatch } from "react-redux";
import { set_Google_Entry_State } from "../../store/slices/userSlice";


function GoogleOAuth({ type }) {
  const dispatch = useDispatch()

  const handle_Google_OAuth2 = () => {
    dispatch(set_Google_Entry_State(true))
    
    window.open(`${backend_URL}/auth/google/callback`, "_self");
  };

  return (
    <div
      // style={{ border: "3px solid red" }}
      className="flex items-center justify-center"
    >
      <div
        className="border-2 border-red-500 bg-gray-50 w-[23rem] sm:w-[25.5rem] p-3 text-md text-gray-500 font-semibold rounded-[4rem] text-center flex items-center justify-center gap-[0.8rem] cursor-pointer mt-4 shadow-lg"
        onClick={handle_Google_OAuth2}
      >
        <GoogleIcon style={{ color: "red", fontSize: "1.8rem" }} />
        <span className="">Continue with Google</span>
      </div>
    </div>
  );
}

export default GoogleOAuth;
